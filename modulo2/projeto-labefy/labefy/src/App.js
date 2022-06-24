import React from "react"
import SideMenu from "./components/SideMenu/SideMenu"
import TelaInicial from "./pages/TelaInicial"
import "./assets/css/style.css"

class App extends React.Component{
  state ={ 
    tela: 'Tela inicial',
    idPlaylistSelecionada: ''
  }

  handleIdPlaylist = (event) => {
    this.setState({idPlaylistSelecionada: event.target.id})
  }

  render() {
    return (
      <div className="App">
        <SideMenu
          onClick={this.handleIdPlaylist}
        />
        <TelaInicial idPlaylist={this.state.idPlaylistSelecionada}/>
      </div>
    )
  }
}

export default App;
