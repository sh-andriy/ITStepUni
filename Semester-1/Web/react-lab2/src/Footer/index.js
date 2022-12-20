import React from "react";
import "./style.css";

function Footer (){
    return (
        <div className="footer">
            <div className="main-footer-container">
                <div className="container-footer">
                    <div className="title-footer">Footer Navigation</div>
                    <hr id="title-hr"/>
                    <div>
                        <div id="footer-link">Home Page</div>
                        <div id="footer-link">Our Services</div>
                        <div id="footer-link">Meet the Team</div>
                        <div id="footer-link">Blog</div>
                        <div id="footer-link">Contact Us</div>
                        <div id="footer-link">Gallery</div>
                        <div id="footer-link">Portfolio</div>
                        <div id="footer-link">Online Shop</div>
                    </div>
                </div>
                <div className="container-footer">
                    <div className="title-footer">Latest Gallery</div>
                    <hr id="title-hr" />
                    <div className="footer-gallery">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="container-footer">
                    <div className="title-footer">From Twitter</div>
                    <hr id="title-hr" />
                    <div>
                        <div className="some-info">
                            <span>@name RT @name Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.</span>
                            <span id="footer-time">about 9 hours ago</span>
                        </div>
                        <div className="some-info">
                            <span>@name RT @name Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.</span>
                            <span id="footer-time">about 9 hours ago</span>
                        </div>
                        <div className="some-info">
                            <span>@name RT @name Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.</span>
                            <span id="footer-time">about 9 hours ago</span>
                        </div>
                        <div className="some-info">
                            <span>@name RT @name Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.</span>
                            <span id="footer-time">about 9 hours ago</span>
                        </div>
                    </div>
                </div>
                <div className="container-footer">
                    <div className="title-footer">Contact US</div>
                    <hr id="title-hr" />
                    <form className="contact-form">
                        <label className="contact-label">Name *</label>
                        <input className="contact-input"></input>
                        <label className="contact-label">Email *</label>
                        <input className="contact-input"></input>
                        <input className="contact-input-msg"></input>
                        <div>
                            <input className="submit-button" type="submit" value="Submit"></input>
                            <input className="reset-button" type="reset" value="Reset"></input>
                        </div>
                    </form>
                </div>
            </div>
            <hr />
            <div className="footer-info">
                <div>Copyright © 2009 - 2022 - All Rights Reserved - Domain Name</div>
                <div>Template by OS Templates</div>
            </div>
        </div>
    )
}

export default Footer;