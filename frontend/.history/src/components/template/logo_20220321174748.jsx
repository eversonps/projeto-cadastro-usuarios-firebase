import React from "react"
import "./logo.css"
import logo from "../../assets/images/background.png"

export default props => (
    <aside className="logo"> 
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>
)