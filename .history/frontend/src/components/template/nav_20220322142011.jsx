import React from "react"
import "./nav.css"

import {Link} from "react-router-dom"

export default props => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <a href="/">
                    <i className="fa fa-home"></i> Início
                </a>
                <a href="/users">
                    <i className="fa fa-users"></i> Usuários
                </a>
            </nav>
        </aside>
    )
}