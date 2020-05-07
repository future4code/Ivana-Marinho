import React from "react";
import { connect } from "react-redux";

class Planner extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      form: {} 
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();

  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Segunda-feira</label>
        <input/>

        <label>Terça-feira</label>
        <input />

        <label>Quarta-feira</label>
        <input />

        <label>Quinta-feira</label>
        <input />

        <label>Sexta-feira</label>
        <input />

        <label>Sábado</label>
        <input />

        <label>Domingo</label>
        <input />

      </form>
    
    )}
}

export default connect()(Planner);
