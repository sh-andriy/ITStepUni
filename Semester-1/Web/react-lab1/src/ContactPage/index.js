import React from "react";
import "./style.css"


function ContactPage () {
    return (
        <div className="main-container">
            <div className="container-page" data-aos="fade-in" data-aos-once="false" data-aos-duration="1000">
                <div className="contact-title">Get in touch</div>
                <div className="contact-text">Nullam id dolor id nibh ultricies vehicula ut id elit.
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla
                    vitae elit libero, a pharetra augue. Nulla vitae elit libero, a
                    pharetra augue. Sed posuere consectetur est at lobortis. Fusce
                    dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                    ut fermentum massa justo sit amet risus.</div>
                <div className="contact-text">Morbi leo risus, porta ac consectetur
                    ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod.
                    Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.</div>
                <form className="contact-form">
                    <label className="contact-label">Name</label>
                    <input className="contact-input" placeholder="Enter your name"></input>
                    <label className="contact-label">Email Address</label>
                    <input className="contact-input" placeholder="Enter your email address"></input>
                    <label className="contact-label">Message</label>
                    <textarea className="contact-textarea" placeholder="Enter your message"></textarea>
                    <input className="submit-button" type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;
