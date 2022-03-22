import "./app.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

import React from "react"

import Logo from "../components/template/logo"
import Nav from "../components/template/nav"
import Footer from "../components/template/footer"
import Routes from "./routes"

import {BrowserRouter as Router} from "react-router-dom"

export default props => {
    return (
        <div className="app">
            <Router>
                <Logo></Logo>
                <Nav></Nav>
                <Routes></Routes>
                <Footer></Footer>
            </Router>
        </div>
    )
}


