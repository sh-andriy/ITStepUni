import "./style.css";
import React from "react";
import mockData from "./mock-main/data.json";
import Card from "./Card";

function Main() {
    const cards = mockData;
    return (
        <div className="main">
            <div className="container-main">
                {cards.map(card => {
                    return (
                        <Card
                            image={card.image}
                            title={card.title}
                            textmain={card.textmain}
                            text={card.text}
                            link={card.link}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Main;