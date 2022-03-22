import React from "react";
import {Routes, Route} from "react-router"

import Home from "../components/home/home"
import UserCrud from "../components/user/userCrud"

export default props => (
    <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/users" element={<UserCrud />}/>
        <Route path="*" element={<Home />}/>
    </Routes>
)