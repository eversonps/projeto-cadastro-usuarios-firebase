import React from "react"
import "./nav.css"

export default props => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <a href="#/">
                    <i className="fa fa-home"></i> Início
                </a>
            </nav>
        </aside>
    )
}