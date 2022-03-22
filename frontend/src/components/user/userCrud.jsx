import React, {Component} from "react"
import header from "../template/header"
import Main from "../template/main"

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}

export default class UserCrud extends Component{
    render(){
        return (
            <Main {...headerProps}>
                Usuario
            </Main>
        )
    }
}