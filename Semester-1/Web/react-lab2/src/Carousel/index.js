
import React from "react";
import Carousel from 'react-material-ui-carousel';
import './style.css';

function MyCarousel () {
    const colors = [
        '#BD525C', '#4694A6', '#F68225'
    ];
    return (
        <div className="carousel-wrap">
            <Carousel height={'500px'}>
                {
                    colors.map(color => (<div
                            style={{
                                backgroundColor: color
                            }}
                            className="carousel-elem"></div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default MyCarousel;
