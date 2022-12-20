import React from "react";
import './style.css';
import facebook from '../images/facebook.svg';
import email from '../images/email.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';
import {NavLink} from "react-router-dom";


function Navigation (){
    return (
        <div className="Nav">
            <NavLink to='/'><div className="name">Milton</div></NavLink>
            <hr className="nav-hr"/>
            <div className="Text">Denali is a simple responsible blog template.
                Easily add new posts using the Editor or change
                layout and design using the Designer.</div>
            <hr className="nav-hr"/>
            <NavLink to='/'><div className="button">Home</div></NavLink>
            <NavLink to='/about'><div className="button">About</div></NavLink>
            <NavLink to='/contact'><div className="button">Contact</div></NavLink>
            <hr className="nav-hr"/>
            <div className="container">
                <div><img src={facebook} className="icon"></img></div>
                <div><img src={instagram} className="icon"></img></div>
                <div><img src={twitter} className="icon"></img></div>
                <div><img src={linkedin} className="icon"></img></div>
                <div><img src={email} className="icon"></img></div>
            </div>
            <div className="Text2">Built with webflow</div>
        </div>
    )
}

export default Navigation;
