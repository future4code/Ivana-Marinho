import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const urlBase = "https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists";

const ContainerSideBar = styled.div`
    width: 20vw;
    height: 100vh;
    border: 3px solid white;
    border-top: none;
    border-bottom: none;
    display: flex;
`;

const Imagem = styled.img`
    
`;

const Letra = styled.span`
    color: white;
    font-size: 50px;
    padding: 40px;
`;

const MenuDiv = styled.div`
    padding: 10px;
    color: white;
    align-self: center;
`;

const NovaOpcao = styled.option`
`;

class SideBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            novaPlaylistValue: "",
            nomeDoArtistaValue: "",
            nomeDaMusicaValue: "",
            linkValue: "",

            listaDeDados: []          
            }
    }

    onChangeCriarNovaPlaylist = (event) => {
        this.setState({novaPlaylistValue: event.target.value})
    }

    onChangeNomeDoArtista = (event) => {
        this.setState({nomeDoArtistaValue: event.target.value})
    }
    
    onChangeNomeDaMusica = (event) => {
        this.setState({nomeDaMusicaValue: event.target.value})
    }

    onChangeLink = (event) => {
        this.setState({linkValue: event.target.value})
    }

    onClickAdicionar = () => {
        const body = {
            "name": this.state.novaPlaylistValue
        }

        axios.post(`${urlBase}/playlists`, body, {
            headers: {

                "api-token": "Ivana-Hamilton"
            }
        })
        .then(()=> {
        })
        .catch(() => {
        })
    }

    componentDidMount(){
        this.getPlaylists();
    }

        getPlaylists = () => {    
            axios.get(`${urlBase}`, {
                headers: {
                    "api-token": "Ivana-Hamilton"
            }
        })
        .then((response) => {
            console.log(response.data.result)
            this.setState({listaDeDados: response.data.result})
        })
    }

    render(){
        return(
            <ContainerSideBar>
                <Imagem src={("https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png")}/>
                <Letra>SPOTIF4</Letra><br/><br/>

                <MenuDiv>
                <label htmlFor={"name"}>Criar nova playlist</label><br/>
                <input name={"name"} value={this.state.novaPlaylistValue} onChange={this.onChangeCriarNovaPlaylist} type="text" placeholder="Nome da Playlist"/>             
                <button onClick={this.onClickAdicionar}>Criar!</button>

                <p>Selecione a Playlist para adicionar músicas e preencha os dados a seguir</p>
                <select>
                    <option value="">Nenhum</option>
                    {this.state.listaDeDados.map((cadaDado) => {
                        return <NovaOpcao vale={cadaDado.name}/>
                    })}
                </select><br/><br/>
                <label htmlFor={"artista"}>Nome do Artista</label>
                <input value={this.state.nomeDoArtistaValue} onChange={this.onChangeNomeDoArtista} name={"artista"}/><br/>

                <label htmlFor={"musica"}>Nome da música</label>
                <input value={this.state.nomeDaMusicaValue} onChange={this.onChangeNomeDaMusica} name={"musica"}/><br/>

                <label htmlFor={"link"}>Link</label><br/>
                <input value={this.state.linkValue} onChange={this.onChangeLink} name={"link"}/><br/>

                <button >Adicionar</button><br/>

                

                </MenuDiv>

                
            </ContainerSideBar>
        )
    };
}


export default SideBar;