import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const urlBase = "http://www.boredapi.com/api/activity/";

const Container = styled.div`
  margin-top: 10px;
  margin-left: 200px;
`;

const ContainerNumeros = styled.div`
  width: 200px;
  height: 100px;
  padding: 10px;
  margin-left: 300px;
  border: 2px solid red;
  font-size: 38px;
  text-align: center;
  cursor: pointer;
  background-color: blue;
  color:white;
`;

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activityInfo: {
        activity: "Clean out your closet and donate the clothes you've outgrown",
        accessibility: 0.1,
        type: "charity",
        participants: 1,
        price: 0,
        link: "",
        key: "9026787"
      }
    }
  }
  getActivity = () => {
    axios.get(`${urlBase}`).then(response => {
      this.setState({activityInfo: response.data})
    })
  }

  render(){
    return (
      <Container>
        <h2>Clique abaixo e receba uma dica do que fazer para acabar com o tédio!</h2>
        <ContainerNumeros onClick={this.getActivity}>Clique Aqui!</ContainerNumeros>
        <br/>
        <h3>Resultado:</h3>
        <p><b>Atividade: </b>{this.state.activityInfo.activity}</p>
        <p><b>Tipo: </b>{this.state.activityInfo.type}</p>
        <p><b>Participantes: </b>{this.state.activityInfo.participants}</p>
        <p><b>Preço: </b>{this.state.activityInfo.price}</p>

      </Container>
  )};
};
export default App;
