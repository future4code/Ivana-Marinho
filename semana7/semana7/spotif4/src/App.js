import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SideBar from './Components/SideBar.js';

const Background = styled.div`
  background-color: orange;
  height: 100vh;
  border: 3px solid black;
  display: flex;
  align-items: flex-end;
`;

class App extends React.Component {
  render(){
    return (
      <Background>
        <SideBar/>
      </Background>
    );
  }
}

export default App;
