import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardGrande from './Componentes/MeusComponentes/CardGrande.js';
import CardPequeno from './Componentes/CardPequeno/CardPequeno.js';

function App() {
  return (
    <div>
      <CardGrande/>
      <CardPequeno/>
    </div>
  );
}

export default App;
