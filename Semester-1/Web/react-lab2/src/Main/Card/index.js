import React from 'react';
import './style.css';

function Card (props) {
    return (
        <div className="card-container">
            <div className="card-first">
                <div id="card-block">
                    <img src={props.image} />
                </div>
                <div id="card-text">
                    <div className="card-subtitle">{props.title}</div>
                    <div className="card-desc">{props.textmain}</div>
                    <div className="card-desc">{props.text}</div>
                    <div className="card-link">{props.link}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;