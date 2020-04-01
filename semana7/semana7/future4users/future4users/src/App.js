import React from 'react';
import axios from 'axios';
import Registro from './Components/Registro.js';
import Lista from './Components/Lista.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedPage: "Registro"
    }
  }

  onClickButton = () => {
     let newPage;

     switch(this.state.selectedPage){
       case "Registro":
         newPage = "Lista";
         break;
        case "Lista":
          newPage = "Registro";
          break;
        default:
          newPage = "Registro";
      }
      this.setState({selectedPage: newPage})
  }

  getPageToRender = () => {
    switch(this.state.selectedPage){
      case "Registro":
        return <Registro/>
        
       case "Lista":
         return <Lista/>
       
       default:
         return <Registro/>
     }
  }
 
  render(){
    const currentPage = this.getPageToRender();
  return (
    <div>
      <button onClick={this.onClickButton}>
        {this.state.selectedPage === "Registro"
          ? "Ir para a próxima lista" : "Voltar"}
      </button>
       {currentPage}  
    </div>
  );
}
}

export default App;
