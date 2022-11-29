import React from "react"

function Card(props) {
    return (
        <div className="card">
            <img className="katie" src={require(`../images/${props.img}`)} alt="Image of Katie Zaferes"/>
            <div className="card-stat">
                <p className="rating"><img className="star-icon" src={require("../images/star.png")} width="14px" alt="star rating" />{props.rating} <span className="star-rating">({props.reviewCount}) • {props.location}</span></p>
                <p className="katie-title">{props.title}</p>
                <p className="rate-price"><span className="price">From ${props.price}</span> / person</p>
                </div>
            </div>
    )
}

export default Card;