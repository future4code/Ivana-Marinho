import React,{Component} from "react";
import styled from "styled-components"

const FiltroContainer = styled.div``;

class Filtro extends Component{
    render(){
        return(
            <FiltroContainer>
                <button>Marcar todas como completas</button>
                <button>Todas</button>
                <button>Pendentes</button>
                <button>Completas</button>
            </FiltroContainer>
        )
    };

};

export default Filtro;