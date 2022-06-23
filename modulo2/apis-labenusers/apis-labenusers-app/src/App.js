import React from "react"
import axios from "axios"
import styled from "styled-components"
import ListaDeUsuarios from "./componentes/ListaDeUsuarios"
import "./App.css"

const TelaInicial = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeaderA = styled.header`
  background-color: black;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`

const HeaderTitulo2 = styled.h2`
  text-align: center;
  margin: 1.5rem;
  font-size: 2rem;
`

const ContainerMain = styled.main`
  width: 100%;
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 35%;
  min-width: 350px;
  margin: 1rem 0;
`

const Inputs = styled.input`
  margin: 0.3rem 0 1rem 0;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  min-width: 350px;
`

class App extends React.Component{
  state = {
    valorInputNome: "",
    valorInputEmail: "",
    // tela 1: Tela de cadastro | tela 2: lista de usuarios
    telaAtual: 1
  }

  // Controladores de input
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

  // Faz a requisição com a api para criar um usuário
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
        alert(`Usuário adicionado com sucesso!`)
        this.setState({
          valorInputNome: "",
          valorInputEmail: ""
        })
    }).catch((error) => {
        alert(error.response.data.message)
    })
  } 

  // Troca as telas da página ao clicar no botão
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
    //renderiza a tela escolhida de acordo com o state
    let telaExibida
    if(this.state.telaAtual === 1) {
      telaExibida = (
        <TelaInicial>
          <HeaderA>
            <button onClick={this.handleTrocaTela} className="botao">Ir para Lista de Usuários</button>
          </HeaderA>
          <ContainerMain>
            <InputContainer>
              <HeaderTitulo2>Cadastro</HeaderTitulo2>
              <label htmlFor="nome">Nome</label>
              <Inputs  
                type ="text" 
                id="nome" 
                value={this.state.valorInputNome} 
                onChange={this.handleValorNome}
                placeholder="Nome"
              />
              <label htmlFor="email">E-mail</label>
              <Inputs 
                type="email"
                id="email" 
                value={this.state.valorInputEmail} 
                onChange={this.handleValorEmail} 
                placeholder="E-mail"
              />
            </InputContainer>
            <button onClick={this.handleCriarUsuario} className="botao">Criar Usuário</button>
          </ContainerMain>
        </TelaInicial>
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