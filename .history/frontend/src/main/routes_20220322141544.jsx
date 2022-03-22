import React from "react";
import from "react-router-dom"

import Home from "../components/home/home"
import UserCrud from "../components/user/userCrud"

export default props => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users" element={<UserCrud />}/>
        <Route path="*" element={<Home />}/>
    </Routes>
)