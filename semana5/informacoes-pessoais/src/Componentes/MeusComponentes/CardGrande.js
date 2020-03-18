import React from 'react';
import './CardGrande.css';

function CardGrande(){
    return(
        <div>
            <h3>Dados Pessoais</h3>
            <div className="primeira-div">
                <header><strong>Ivana Marinho</strong></header>
                <img className='imagem' src='https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png'/>
                <p>Oi, Eu sou Ivana! Sou aluna do curso de Web Full Stack da Future4.</p>
            </div>


        </div>

    )
}

export default CardGrande;