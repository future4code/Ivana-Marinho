import React, {Component} from "react";
import styled from "styled-components";
import Filtro from "./Filtro.js"

const Formulario = styled.div`
    width: 500px;
    height: 200px;
    border: 1px solid grey;
    margin-left: 390px;
`;

class ListaDeTarefas extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue: ""
        }
    };

    onChangeInput = (event) =>{
        this.setState({inputValue: event.target.value})
    }

    onClickButtonAdd = () =>{
        return
    }

    render(){
        return(
            <Formulario>
                <input type="text"
                    placeholder="O que tem que ser feito?"
                    value={this.state.inputValue}
                    onChange={this.onChangeInput}
                    
                />
                <button>Adicionar</button>
               
                <Filtro/>
            </Formulario>
        )
    };
};

export default ListaDeTarefas;