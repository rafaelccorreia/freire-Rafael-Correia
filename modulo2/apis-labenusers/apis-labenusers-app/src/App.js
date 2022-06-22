import React from "react"
import axios from "axios"
import ListaDeUsuarios from "./componentes/ListaDeUsuarios"
import "./App.css"

class App extends React.Component{
  state = {
    valorInputNome: "",
    valorInputEmail: "",
    telaAtual: 1
  }

  handleValorNome = (event) => {
    this.setState({
      valorInputNome: event.target.value
    })
  }

  handleValorEmail = (event) => {
    this.setState({
      valorInputEmail: event.target.value
    })
  }

  handleCriarUsuario = () => {

    const body = {
      name: this.state.valorInputNome,
      email: this.state.valorInputEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: "rafael-correia-freire"
      }
    }).then(() => {
        alert(`Usuário adicionado com sucesso`)
        this.setState({
          valorInputNome: "",
          valorInputEmail: ""
        })
    }).catch((error) => {
        alert(error.message)
    })
  } 

  handleTrocaTela = () => {
    if(this.state.telaAtual === 1) {
      this.setState({
        telaAtual: 2
      })
    } 
    else {
      this.setState({
        telaAtual: 1
      })
    }
  }

  render() {

    let telaExibida

    if(this.state.telaAtual === 1) {
      telaExibida = (
        <div className="tela-inicial">
          <button onClick={this.handleTrocaTela} className="botao">Trocar de tela</button>
          <section className="input-container">
            <label htmlFor="nome">Nome</label>
            <input  
              type ="text" 
              id="nome" 
              value={this.state.valorInputNome} 
              onChange={this.handleValorNome}
              placeholder="Nome"
              className="inputs" 
            />
            <label htmlFor="email">E-mail</label>
            <input 
              type="email"
              id="email" 
              value={this.state.valorInputEmail} 
              onChange={this.handleValorEmail} 
              placeholder="E-mail"
              className="inputs"
            />
          </section>
          <button onClick={this.handleCriarUsuario} className="botao">Criar Usuário</button>
        </div>
      )
    }
    else {
      telaExibida = (
        <ListaDeUsuarios 
          onClick={this.handleTrocaTela}
        />
      )
    }

    return (
      <div className="App">
        {telaExibida}
      </div>
    );
  }
}

export default App;