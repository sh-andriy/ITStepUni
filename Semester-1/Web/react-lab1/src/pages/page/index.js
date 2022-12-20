import React from 'react';
import './style.css';
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const getComponentHeader = (text) => {
    return (
        <div className="page-header">{text}</div>
    )
}

const getComponentText = (text) => {
    return (
        <div className="page-text">{text}</div>
    )
}



const getComponentList = (elems) => {
    return (
        <ul className="page-list">{
            elems.map(el =>{
                return <li>{el}</li>
            })
        }</ul>
    )
};


const getComponentSubblock = (text) => {
    return (
        <div className="page-sub-block">{text}</div>
    )
}

const getComponentSubtitle = (text) => {
    return (
        <div className="page-subtitle">{text}</div>
    )
}

function Page (props) {
    return (
        <div className="main-container">
            <div className="container-page" data-aos="fade-in" data-aos-once="false" data-aos-duration="1000">
                <div className="id">{props.id}</div>
                <NavLink to={`/page/${props.id}`}>
                    <img className = "main-image" src = {props.image}
                         onClick={props.setSelectedPage}/>
                </NavLink>
                <NavLink to={`/page/${props.id}`}>
                    <div className="title" onClick={props.setSelectedPage}>{props.title}</div>
                </NavLink>
                <div>
                    <p className={props.isArticleVisible ? 'hide' : 'description'}>{props.description}
                        <NavLink to={`/page/${props.id}`}><span className="read-more">Read more...</span></NavLink>
                    </p>
                </div>
                <div className="container1">
                    <div className="Date"
                         onClick={() => props.setSelectedDate(props.date)}
                    >{props.date}</div>
                    <div className="vertical-hr">|</div>
                    <div className="Theme"
                         onClick={() => props.setSelectedTheme(props.theme)}
                    >{props.theme}</div>
                </div>
                <hr className={props.isArticleVisible ? 'full-page-hr' : 'hide'}/>
                <div className={props.isArticleVisible ? 'page-description' : 'hide'}>{props.description}</div>
                <article className={props.isArticleVisible ? '' : 'hide'}>
                    {props.fullPage.map(el => {
                        switch (el.type) {
                            case 'header': {
                                return getComponentHeader(el.text);
                            }
                            case 'text': {
                                return getComponentText(el.text);
                            }
                            case 'list': {
                                return getComponentList(el.elems);
                            }
                            case 'sub-block': {
                                return getComponentSubblock(el.text);
                            }
                            case 'subtitle': {
                                return getComponentSubtitle(el.text);
                            }
                            default: {}
                        }
                    })}
                </article>
            </div>
        </div>
    );
};


export default Page;
