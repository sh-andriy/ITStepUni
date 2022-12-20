import "./style.css";
import React from "react";
import mockData from "./mock-desc/data.json";
import DescCard from "./DescriptionCard";


function DescriptionCard() {
    const descriptioncards = mockData;
    return (
        <div className="description">
            <div className="container-description">
                {descriptioncards.map(descriptioncard => {
                    return (
                        <DescCard
                            image={descriptioncard.image}
                            title={descriptioncard.title}
                            t1={descriptioncard.t1}
                            t2={descriptioncard.t2}
                            t3={descriptioncard.t3}
                        />
                    );
                })}
            </div>
        </div>
    )
}


export default DescriptionCard;
