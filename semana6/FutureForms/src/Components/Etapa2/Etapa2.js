import React from 'react';

class Etapa2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    aoClicarNoBotaoDaEtapa2 = () => {
        
    }

    render(){
        return(
            <div>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <form>
                        5. Qual o curso?<br/>
                        <input type="text"/>
                    
                        6. Qual a unidade de ensino?<br/>
                        <input type="text"/>
                    
                </form>
            </div>
        )
    }
};

export default Etapa2;