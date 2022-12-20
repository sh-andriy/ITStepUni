import React from "react";
import "./style.css";
import image from "../images/woman.jpg"
import { NavLink } from "react-router-dom";


function About () {
    return (
        <div className="main-container">
            <div className="container-page" data-aos="fade-in" data-aos-once="false" data-aos-duration="1000">
                <img className = "main-image" src = {image}/>
                <div className="about-title">About me</div>
                <div className="about-text">
                    The rich text element allows you to create and format headings,
                    paragraphs, blockquotes, images, and video all in one place instead of having to add and
                    format them individually. Just double-click and easily create content.
                </div>
                <div className="about-subtitle">Static and dynamic content editing</div>
                <div className="about-text">
                    A rich text element can be used with static
                    or dynamic content. For static content, just
                    drop it into any page and begin editing. For
                    dynamic content, add a rich text field to any
                    collection and then connect a rich text element to
                    that field in the settings panel. Voila!
                </div>
                <NavLink to="/contact">
                    <div className="about-button">Get in touch</div>
                </NavLink>
            </div>
        </div>
    );
}

export default About;
