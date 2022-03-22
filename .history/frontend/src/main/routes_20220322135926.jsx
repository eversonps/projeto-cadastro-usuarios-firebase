import React from "react";
import {Routes, Route} from "react-router-dom"

import Home from "../components/home/home"
import UserCrud from "../components/user"

<Routes>
    <Route path="/about" element={<About />}/>
    <Route path="/param/:id" element={<Param />}/>
    <Route path="/" element={<Home />}/>
    <Route path="*" element={<NotFound />}/>
</Routes>