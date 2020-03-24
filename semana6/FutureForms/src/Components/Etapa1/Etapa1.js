import React from 'react';

class Etapa1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
       
    }

    

    render(){
        return(
            <div>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <form>
                    <label>      
                        1. Qual o seu nome?<br/>
                        <input type='text' /><br/>
                    </label>

                    <label>
                        2. Qual sua idade?<br/>
                        <input type="number"/><br/>
                    </label>

                    <label>
                        3. Qual seu email?<br/>
                        <input type="email" /><br/>
                    </label>

                    <label>4. Qual a sua escolaridade?</label><br/>
                        <select>
                            <option>Ensino médio incompleto</option>
                            <option>Ensino médio completo</option>
                            <option>Ensino superior incompleto</option>
                            <option>Ensino superior completo</option>
                        </select>    

                    
                </form>

            </div>
        )
    };

};

export default Etapa1;
