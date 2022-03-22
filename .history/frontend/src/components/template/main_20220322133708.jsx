import React from "react"
import Header from "./header"

export default props => (
    <>
        <Header {...props}></Header>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </>
)


