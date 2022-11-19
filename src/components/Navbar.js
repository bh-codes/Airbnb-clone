import React from "react"

function Navbar() {
    return(
        <header>
            <div className="nav-container">
            <img className="navbar" src={require("../images/airbnb-logo.png")} alt="airbnb logo" width="82px"/>
            </div>
        </header>
    )
}

export default Navbar;