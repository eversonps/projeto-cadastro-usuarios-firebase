import React from "react"
import Header from "./header"

export default props => (
    <>
        <Header {...props}></Header>
        <main className="content">
            Conteudo
        </main>
    </>
)


