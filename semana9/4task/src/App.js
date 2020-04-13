import React from "react";
import styled from "styled-components";
import ListaDeTarefas from "./Componentes/ListaDeTarefas.js";
import Filtro from "./Componentes/Filtro.js";

const Titulo = styled.p`
  color: darkred;
  font-size: 100px;
  margin-left: 500px;
  margin-top: 1px;
`;

function App() {
  return (
    <div>
      <Titulo>4Task</Titulo>
      <ListaDeTarefas/>
    </div>
  );
}

export default App;
