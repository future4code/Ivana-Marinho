import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
    createUser = () => {
        const body = {
            name: this.StaticRange.inputName,
            email: this.StaticRange.inputEmail
        }
    
       axios.post('https://us-central1-future-apis.cloudfunctions.net/api/users', body,
    {
        headers: {
            'api-token': 'Ivana-Hamilton'
        }
    })
    
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log("Deu erro!", err);
    })
    }
    
    render(){
        return(
            <Container>
                <label>Nome:</label>
                <input
                    type='text'
                />

                <br/><br/>

                <label>E-mail:</label>
                <input
                    type='text'
                />

                <br/>

                <button>Salvar</button>
            </Container>
    
        )
    }
}

export default Registro;