import React from "react"

function Card() {
    return (
        <div className="card">
            <img className="katie" src={require("../images/katie-zaferes.png")} alt="Image of Katie Zaferes"/>
            <div className="card-stat">
                <p className="rating"><img className="star-icon" src={require("../images/star.png")} width="14px" alt="star rating" />5.0 <span className="star-rating">(6) • USA</span></p>
                <p className="katie-title">Life lessons with Katie Zaferes</p>
                <p className="rate-price"><span className="price">From $136</span> / person</p>
                </div>
            </div>
    )
}

export default Card;