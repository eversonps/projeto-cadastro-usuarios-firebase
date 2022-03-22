import React, {Component} from "react"
import Main from "../template/main"
import axios from "axios"

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}

const baseUrl = "http://localhost:3001/users"
const initialState = {
    user: {name: "", email: ""},
    list: []
}

export default class UserCrud extends Component{
    state = { ...initialState }

    clear(){

    }
    
    render(){
        return (
            <Main {...headerProps}>
                Usuario
            </Main>
        )
    }
}