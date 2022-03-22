import "./app.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

import React from "react"

import Logo from "../components/template/logo"
import Nav from "../components/template/nav"
import Footer from "../components/template/footer"
import Home from "../components/home/home"

import {BrowserRouter as Router} from "react-router-dom"

export default props => {
    return (
        <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Home></Home>
        <Footer></Footer>
    </div>
    )
}


