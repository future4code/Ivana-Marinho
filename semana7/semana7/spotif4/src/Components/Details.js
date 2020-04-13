import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
    border: 4px solid purple;
    width: 40%;
    height: 100vh;
    color: white;
    margin-left: 65%;
    position: absolute;
`;

const NomeDaPlaylist = styled.span`
    font-size: 20px;
    color: white;
`;

class Details extends React.Component {
    render(){
        return(
            <DetailsContainer>
                <NomeDaPlaylist>Nome da Playlist:</NomeDaPlaylist>
                <br/>
                <button>Ver Detalhes</button>
            </DetailsContainer>
        )
    }
};

export default Details;