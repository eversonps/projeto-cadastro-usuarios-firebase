import React, {Component} from "react"
import header from "../components/template/header"
import Main from "../components/template/main"

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}

export default class UserCrud extends Component{
    render(){
        return (
            <Main {headerProps}>
                
            </Main>
        )
    }
}