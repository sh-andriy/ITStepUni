//Funcs
function addTask(event) {
    event.preventDefault();
    //Creating div
    const Div = document.createElement('div');
    Div.classList.add('task');
    //Creating li's
    const newTask = document.createElement('li');
    newTask.innerText = Input.value;
    newTask.classList.add('task-item');
    Div.appendChild(newTask);
    //Adding task to local storage
    saveLocalTasks(Input.value);
    //Creating checked button
    const completedButton = document.createElement('btn');
    completedButton.innerHTML = '<button class="btn btn-outline-light"><i class="fa-solid fa-check"></i></button>';
    completedButton.classList.add('complete-button');
    Div.appendChild(completedButton);
    //Creating delete button
    const deleteButton = document.createElement('btn');
    deleteButton.innerHTML = '<button class="btn btn-outline-light"><i class="fa-solid fa-delete-left"></i></button>';
    deleteButton.classList.add('delete-button');
    Div.appendChild(deleteButton);
    //Adding to List
    List.appendChild(Div);
    //Clear User's input value
    Input.value = '';
}

function editTask(e) {
    const item = e.target;
    const clicked = item.parentElement.classList[0]
    const task = item.parentElement.parentElement

    //Removing task
    //!не бажано
    if (clicked === "delete-button") {
        task.classList.add('disappear');
        //deleting this specific task from localstorage
        removeLocalTasks(task);
        //just removing it
        task.addEventListener('transitionend', function() {
            task.remove();
        })
    }

    //Completing task (check mark)
    else if (clicked === "complete-button") {
        task.classList.toggle("completed")
    }
}

function filterTask(e) {
    const tasks = List.childNodes;

    tasks.forEach(function (task){
        switch (e.target.value) {
            case "all":
                task.style.display = "flex";
                break;
            case  "completed":
                if (task.classList.contains('completed')) {
                    task.style.display = "flex";
                }
                else {
                    task.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!task.classList.contains('completed')) {
                    task.style.display = "flex";
                }
                else {
                    task.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTasks(task) {
    //Checking if I already have something in local storage
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
    //Checking if I already have something in localstorage
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task) {
        //Creating div
        const Div = document.createElement('div');
        Div.classList.add('task');
        //Creating li's
        const newTask = document.createElement('li');
        newTask.innerText = task;
        newTask.classList.add('task-item');
        Div.appendChild(newTask);
        //Creating checked button
        const completedButton = document.createElement('btn');
        completedButton.innerHTML = '<button class="btn btn-outline-light"><i class="fa-solid fa-check"></i></button>';
        completedButton.classList.add('complete-button');
        Div.appendChild(completedButton);
        //Creating delete button
        const deleteButton = document.createElement('btn');
        deleteButton.innerHTML = '<button class="btn btn-outline-light"><i class="fa-solid fa-delete-left"></i></button>';
        deleteButton.classList.add('delete-button');
        Div.appendChild(deleteButton);
        //Adding to List
        List.appendChild(Div);
    });
}

//NOW our added LAB-11 saved to local storage and if you delete one and reload page you will get it back

//SO im changing it here
function removeLocalTasks(task) {
    //Checking if I already have something in localstorage
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    //... here (if to be more specific)
    const taskIndex = task.children[0].innerText;
    tasks.splice(tasks.indexOf(taskIndex), 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Selects
const Input = document.querySelector('.input');
const Button = document.querySelector('.btn');
const List = document.querySelector('.list');
const Option = document.querySelector('.filter-task');


//EventListeners
document.addEventListener('DOMContentLoaded', getTasks);
Button.addEventListener('click', addTask);
List.addEventListener('click', editTask);
Option.addEventListener('change', filterTask);

