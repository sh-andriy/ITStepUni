import React from 'react';
import './style.css';


function DescCard (props) {
    return (
        <div className="card-desc-main">
            <div>
                <div className="desc-title">{props.title}</div>
                <div className="desc-text">{props.t1}</div>
                <div className="desc-text">{props.t2}</div>
                <div className="desc-text">{props.t3}</div>
            </div>
            <div >
                <img id="desc-img" src={props.image} alt=" "/>
            </div>
            <div>
                <img id="desc-img" src={props.image} alt=" "/>
            </div>
            <div>
                <div className="desc-title">{props.title}</div>
                <div className="desc-text">{props.t1}</div>
                <div className="desc-text">{props.t2}</div>
                <div className="desc-text">{props.t3}</div>
            </div>
        </div>
    )
}


export default DescCard;
