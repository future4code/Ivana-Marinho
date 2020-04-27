import React, {Component} from "react";
import styled from "styled-components";
import { push } from "connected-react-router";
import { connect } from "react-redux";

const ImageStyle = styled.img`
    width: 99vw;
    height: 99vh;   
`;

const ButtonLogin = styled.button`
    border-radius: 12px;
    margin-top: 40px;
    position: absolute;
`;

const ButtonRegister = styled.button`
    border-radius: 12px;
    margin-top: 40px;
    margin-left: 60px;
    position: absolute;
`;

const Header = styled.h1`
    margin-left: 450px;
`;

const HomePage = props => {
        return(
            <div>
                <Header>FUTUREX - PLANEJE SUA NOVA MISSÃO!</Header>
                <ButtonLogin onClick={props.goToLoginPage}>Login</ButtonLogin>
                <ButtonRegister>Cadastre-se</ButtonRegister>
                <ImageStyle src={require("../../img/moon.jpg")}/>   
            </div>
        )
    }

function mapDispatchToProps(dispatch){
    return {
        goToLoginPage: () => dispatch(push("/login"))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(HomePage);