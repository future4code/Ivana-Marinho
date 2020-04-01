import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const urlBase = "https://us-central1-future-apis.cloudfunctions.net/api";

const Container = styled.div`
    width: 350px;
    height: 190px;
    border: 1px solid black;
    margin-left: 450px;
    margin-top: 60px;
    padding-top: 25px;
    padding-left: 25px;
`;


class Registro extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            nameValue: "",
            emailValue: ""
        }
    }

    onChangeName = (event) => {
        this.setState({nameValue: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({emailValue: event.target.value})
    }

    onClickSalvarDados = () => {
        console.log(this.state.nameValue);
        console.log(this.state.emailValue)
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
        }
        axios.post(`${urlBase}/users`, body, {
            headers: {
                "api-token": "Ivana-Hamilton"
            }
        }).then(() => {
            alert("Usuário criado com sucesso!");
        }).catch(() => {
            alert("Erro ao criar usuário!");
        })
    };   
    
    render(){
        return(
            <Container>
                <label htmlFor={"name"}>Nome:</label>
                <input
                    type='text'
                    name={"name"}
                    value={this.state.nameValue}
                    onChange={this.onChangeName}
                />

                <br/>

                <label htmlFor={"email"}>E-mail:</label>
                <input
                    name={"email"}
                    value={this.state.emailValue}
                    onChange={this.onChangeEmail}
                />

                <br/>

                <button onClick={this.onClickSalvarDados}>Salvar</button>
            </Container>
    
        )
    }
}

export default Registro;