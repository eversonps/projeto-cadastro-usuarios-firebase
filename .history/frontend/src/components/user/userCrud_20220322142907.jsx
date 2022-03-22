import React, {Component} from "react"
import Main from "../template/main"
import axios from "axios"

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}

const initialState = {

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