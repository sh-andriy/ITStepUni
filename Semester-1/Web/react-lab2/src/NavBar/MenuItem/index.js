import React, { useState } from "react";
import './style.css';


function MenuItem (props) {


    const [show, setShow] = useState(false);

    return (
        <div
            className="menu-item"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >

            {props.elem.text}
            {props.elem.items &&

                <div
                    className={`menu-sub-items ${show ? 'show' : ''}`}>
                    {props.elem.items
                        .map(el => <div id="menu-sub-item">{el.text}</div>)}
                </div>
            }

        </div>);
}


export default MenuItem;
