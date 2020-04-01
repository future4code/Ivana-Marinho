import React, { useReducer } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const urlBase = "https://us-central1-future-apis.cloudfunctions.net/api";

const ComponenteLista = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black; 
    padding-bottom: 1px 0;      
`
const BotaoDeletar = styled.p`
    color: red;
    cursor: pointer;
`

class Lista extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listaDeUsuarios: []
        }
    }

    componentDidMount(){
        this.getUsuario();
        }

        getUsuario = () => {
            axios.get(`${urlBase}/users`, {
                headers: {
                    "api-token": "Ivana-Hamilton"
            }
        }).then((resposta) => {
            console.log(resposta.data.result)
            this.setState({listaDeUsuarios: resposta.data.result})
        }

    )}

    deletarUsuario = (id) => {
        console.log("id deletado", id)
        axios.delete(`${urlBase}/users/${id}`, {
            headers: {
                "api-token": "Ivana-Hamilton"
            }
        }).then((response) => {
            this.getUsuario();
        }).catch(() => {
            alert("Erro!");
        })
    }

    render(){
        return(
            <div>
                <h2>Usuários Cadastrados</h2>
                <ul>
                    {this.state.listaDeUsuarios.map((cadaUsuario) => {
                        return( <ComponenteLista>
                            <p>{cadaUsuario.name}</p>
                            <BotaoDeletar onClick={() => this.deletarUsuario(cadaUsuario.id)}>X</BotaoDeletar>
                        </ComponenteLista>
                        )}
                    )}
                </ul>
            </div>
        )
    }
};

export default Lista;