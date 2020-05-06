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
        <label></label>
        <input/>

      </form>
    
    )}
}

export default connect()(Planner);
