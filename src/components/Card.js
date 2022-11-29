import React from "react"

function Card(props) {
    let badgeText 
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../images/${props.item.coverImg}`)} className="card--image"/>
            <div className="card--stats">
                <p className="rating"><img className="star-icon" src={require("../images/star.png")} width="14px" alt="star rating" />{props.item.stats.rating} <span className="star-rating">({props.item.stats.reviewCount}) • {props.item.location}</span></p>
                <p className="card--title">{props.item.title}</p>
                <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
                </div>
            </div>
    )
}

export default Card;