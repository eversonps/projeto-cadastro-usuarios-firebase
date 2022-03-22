import React from "react";
import {Routes, Route} from "react-router-dom"

import Home from "../components/home/home"
import UserCrud from "../components/user"

<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/user" element={<About />}/>
    <Route path="*" element={<Home>}/>
</Routes>