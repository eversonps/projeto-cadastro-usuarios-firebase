import "./app.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"

import Logo from "../components/template/logo"
import Nav from "../components/template/nav"
import Main from "../components/template/main"
import Footer from "../components/template/footer"

export default props => {
    return (
        <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
    </div>
    )
}


