import React from "react"

function Hero() {
    return (
        <section className="hero-container">
            <img className="hero" src={require("../images/photo-grid.png")} alt="Hero area photo grid"/>

            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </section>
    )
}

export default Hero;