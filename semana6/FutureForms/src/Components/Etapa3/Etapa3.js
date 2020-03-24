import React from 'react';

class Etapa3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }



    render(){
        return(
            <div>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <form>
                    
                        5. Por que você não terminou um curso de graduação?<br/>
                        <input type="text"/>

                        6. Você fez algum curso complementar?<br/>
                        <select>
                            <option>Nenhum</option>
                            <option>Curso técnico</option>
                            <option>Curso de inglês</option>
                        </select>
                    
                </form>

            </div>
        )
    }
};

export default Etapa3;