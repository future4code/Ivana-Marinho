import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Registro from './Components/Registro.js';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      name: "",
      email: ""
    }
  }


  render(){
  return (
    <div>
      <button>Ir para página de lista</button>
      <Registro name={this.props.name} email={this.props.email}/>
    </div>
  );
}
}

export default App;
