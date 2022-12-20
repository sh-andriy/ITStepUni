import React from "react";
import "./style.css";


function NotFoundPage () {
    return (
        <div className="not-found-container" data-aos="fade-in" data-aos-once="false" data-aos-duration="1000">
            <div id="not-found">404</div>
            <div id="not-found-title">Page not found</div>
            <div id="not-found-text">The page you are looking for doesn't exist or has been moved.</div>
        </div>
    );
}


export default NotFoundPage;
