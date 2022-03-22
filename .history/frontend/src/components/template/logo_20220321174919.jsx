import React from "react"
import "./logo.css"
import logo from "../../assets/images/logo.jpg"

export default props => (
    <aside className="logo"> 
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>
)