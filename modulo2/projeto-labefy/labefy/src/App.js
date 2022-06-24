import React from "react"
import axios from "axios"
import styled from "styled-components"

import SideMenu from "./components/SideMenu/SideMenu"
import TelaInicial from "./pages/TelaInicial"
import "./assets/css/style.css"

const ContainerTela = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  min-height: 100vh;
`

class App extends React.Component{
  state ={ 
    tela: 'Tela inicial',
    idPlaylistSelecionada: '',
    namePlaylistSelecionada: '',
  }

  handleIdPlaylist = (event) => {
    // verifica qual elemento foi clicado para pegar o nome da playlist no innerHTML
    let playlistNome = ''
    if(event.target.nodeName === 'LI') {
      playlistNome = event.target.firstChild.innerHTML
    } 
    else if(event.target.nodeName === 'SPAN') {
      playlistNome = event.target.innerHTML
    }

    this.setState({
      idPlaylistSelecionada: event.target.id,
      namePlaylistSelecionada: playlistNome
    })
  }

  componentDidMount = () => {

  }

  componentDidUpdtate = () => {

  }

  render() {
    let telaMostrada = (
      <TelaInicial
        idPlaylist={this.state.idPlaylistSelecionada}
        namePlaylist={this.state.namePlaylistSelecionada}
      />
    )

    return (
      <ContainerTela className="App">
        <SideMenu
          onClick={this.handleIdPlaylist}
        />
        {telaMostrada}
      </ContainerTela>
    )
  }
}

export default App;
