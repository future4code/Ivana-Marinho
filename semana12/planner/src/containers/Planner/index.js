import React from "react";
import { connect } from "react-redux";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-ivana";

class Planner extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  onChangeInput = (event) => {

  }
  
  render() {
    return (
      <div>
        <div>
          <input
            />
          <select>
            <option>Selecione o dia da Semana</option>
            <option>Segunda-feira</option>
            <option>Terça-feira</option>
            <option>Quarta-feira</option>
            <option>Quinta-feira</option>
            <option>Sexta-feira</option>
            <option>Sábado</option>
            <option>Domingo</option>
          </select>
          <button>Criar Tarefa</button> 
        </div>
      </div>
    )}
}

export default connect()(Planner);
