import React from "react"
import styled from "styled-components"

import SideMenu from "./components/SideMenu/SideMenu"
import TelaPlaylist from "./pages/TelaPlaylist"
import Rodape from "./components/rodape"
import "./assets/css/style.css"
import sideRightArrow from "./assets/img/side_right_icon.png"

const ContainerTela = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  min-height: 100vh;
`

const SideMenuAppContainer = styled.section`
  width: 10%;
  padding: 1rem 2rem;
  background-color: purple;
  color: white;
  height: auto;
  min-height: 100vh;
  margin-bottom: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MenuHideAppImg = styled.img`
  padding: 1rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.3);
  }
`

class App extends React.Component{
  state ={ 
    tela: 'Tela Inicial',
    idPlaylistSelecionada: '',
    namePlaylistSelecionada: '',
    sideMenuStatus: 'on'
  }

  handleIdPlaylist = (event) => {
    // verifica qual elemento foi clicado para pegar o nome da playlist no innerHTML
    let playlistNome = ''
    if(event.target.nodeName === 'DIV') {
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

  handleMenuHide = () => {
    if(this.state.sideMenuStatus === 'on') {
      this.setState({sideMenuStatus: 'off'})
    }
    else {
      this.setState({sideMenuStatus: 'on'})
    }
  }

  componentDidMount = () => {

  }

  componentDidUpdtate = () => {

  }

  render() {
    let sideMenu
    let telaMostrada = (
      <TelaPlaylist
        idPlaylist={this.state.idPlaylistSelecionada}
        namePlaylist={this.state.namePlaylistSelecionada}
      />
    )
    
    if(this.state.sideMenuStatus === 'on') {
      sideMenu = (
        <SideMenu
          onClick={this.handleIdPlaylist}
          hideMenu={this.handleMenuHide}
        />
      )
    }
    else {
      sideMenu = (
        <SideMenuAppContainer>
          <MenuHideAppImg src={sideRightArrow} onClick={this.handleMenuHide}/>
        </SideMenuAppContainer>
      )
    }

    return (
      <ContainerTela className="App">
        {sideMenu}
        {telaMostrada}
        <Rodape />
      </ContainerTela>
    )
  }
}

export default App;
