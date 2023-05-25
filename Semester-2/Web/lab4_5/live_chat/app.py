from flask import Flask, render_template, request, session, redirect, url_for, jsonify
from flask_socketio import join_room, leave_room, send, SocketIO
import random
from string import ascii_uppercase
from datetime import datetime

from flask_session import Session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from gevent import monkey

from geventwebsocket.handler import WebSocketHandler


monkey.patch_all()

app = Flask(__name__)
app.config["SECRET_KEY"] = "hjhjsdahhds"

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///chat.db"
db = SQLAlchemy(app)
migrate = Migrate(app, db)

app.config["SESSION_TYPE"] = "filesystem"
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_USE_SIGNER"] = True
Session(app)



socketio = SocketIO(app, async_mode='gevent')


rooms = {}


class ChatMessage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room = db.Column(db.String(4))
    name = db.Column(db.String(100))
    message = db.Column(db.String(1000))
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, room, name, message):
        self.room = room
        self.name = name
        self.message = message


def generate_unique_code(length):
    while True:
        code = ""
        for _ in range(length):
            code += random.choice(ascii_uppercase)

        if code not in rooms:
            break

    return code


@app.route("/", methods=["POST", "GET"])
def home():
    session.clear()
    if request.method == "POST":
        name = request.form.get("name")
        code = request.form.get("code")
        join = request.form.get("join", False)
        create = request.form.get("create", False)

        if not name:
            return render_template(
                "home.html", error="Please enter a name.", code=code, name=name
            )

        if join != False and not code:
            return render_template(
                "home.html", error="Please enter a room code.", code=code, name=name
            )

        room = code
        if create != False:
            room = generate_unique_code(4)
            rooms[room] = {"members": 0, "messages": []}
        elif code not in rooms:
            return render_template(
                "home.html", error="Room does not exist.", code=code, name=name
            )

        session["room"] = room
        session["name"] = name
        return redirect(url_for("room"))

    return render_template("home.html")


@app.route("/room")
def room():
    room = session.get("room")
    if room is None or session.get("name") is None or room not in rooms:
        return redirect(url_for("home"))

    # Retrieve all chat messages for the current room from the database
    chat_messages = ChatMessage.query.filter_by(room=room).all()

    return render_template(
        "room.html", code=room, chat_messages=chat_messages
    )


@socketio.on("message")
def message(data):
    room = session.get("room")
    if room not in rooms:
        return

    name = session.get("name")
    message = data["data"]

    # Save the chat message to the database
    chat_message = ChatMessage(room=room, name=name, message=message)
    db.session.add(chat_message)
    db.session.commit()

    content = {
        "name": name,
        "message": message,
        "timestamp": chat_message.timestamp.strftime("%Y-%m-%d %H:%M:%S"),
    }
    send(content, to=room)
    print(f"{name} said: {message}")


@socketio.on("connect")
def connect():
    room = session.get("room")
    name = session.get("name")
    if not room or not name:
        return
    if room not in rooms:
        rooms[room] = {"members": 0, "messages": []}

    join_room(room)
    send({"name": name, "message": "has entered the room"}, to=room)
    rooms[room]["members"] += 1
    session[f"name_{rooms[room]['members']}"] = name  # Store participant's name in session variable
    session.modified = True  # Update the session to ensure changes are saved

    print(f"{name} joined room {room}")




@socketio.on("disconnect")
def disconnect():
    room = session.get("room")
    name = session.get("name")
    if room and room in rooms:
        leave_room(room)
        rooms[room]["members"] -= 1
        if rooms[room]["members"] <= 0:
            del rooms[room]
        if f"name_{rooms[room]['members']}" in session:  # Check if session variable exists before deleting
            del session[f"name_{rooms[room]['members']}"]  # Remove session variable for disconnected participant

    send({"name": name, "message": "has left the room"}, to=room)
    print(f"{name} has left the room {room}")





@app.route("/history")
def history():
    room = session.get("room")
    if room is None or session.get("name") is None or room not in rooms:
        return redirect(url_for("home"))

    # Retrieve all chat messages for the current room from the database
    chat_messages = ChatMessage.query.filter_by(room=room).all()

    return render_template(
        "history.html", code=room, chat_messages=chat_messages
    )


@app.route("/active_users")
def active_users():
    room = session.get("room")
    if room is None or session.get("name") is None or room not in rooms:
        return redirect(url_for("home"))

    online_users = []
    offline_users = []

    if room in rooms:
        participants = rooms[room].get("members", 0)
        if participants:
            for i in range(1, participants + 1):
                name = session.get(f"name_{i}")
                if name:
                    online_users.append({"userName": name, "status": True})
                else:
                    offline_users.append({"userName": session.get(f"name_{i-1}"), "status": False})

    users = online_users + offline_users

    return jsonify(users)


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000, handler_class=WebSocketHandler)

