import React from "react";
import "./Card.css";

export default ({
    bgColor,
    heading,
    imgAlt,
    imgUrl,
    cardTitle,
    cardDiscription,
    cardLink
}) => (
        <div className="Card" style={{ backgroundColor: bgColor }}>
            <h3 className="Card-heading">{heading}</h3>
            <div className="Card-body">
                <div className="Card-image">
                    <img src={imgUrl} alt={imgAlt} />
                </div>
                <div className="Card-content">
                    <h3>{cardTitle}</h3>
                    <p>{cardDiscription}</p>
                </div>
                <a className="Card-link" href={cardLink}>
                    Visit
      </a>
            </div>
        </div>
    );