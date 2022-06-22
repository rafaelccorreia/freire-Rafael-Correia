import React from "react"
import axios from "axios"
import styled from "styled-components"

const ConteudoDiv = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    background-color: antiquewhite;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

class DetalhesUsuario extends React.Component {
    state = {
        editando: false,
        novoNome: "",
        novoEmail: ""
    }

    // Controladores de input
    handleNovoNome = (event) => {
        this.setState({
            novoNome: event.target.value
        })
    }

    handleNovoEmail = (event) => {
        this.setState({
            novoEmail: event.target.value
        })
    }

    // requisição para editar o usuário na api
    editUser = () => {
        const body = {
            name: this.state.novoNome,
            email: this.state.novoEmail
        }

        const editarUser = axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.id}`, body, {
            headers: {
                Authorization: "rafael-correia-freire"
            }
        })

        editarUser.then(() => {
            alert("Usuário editado com sucesso")
        })
        .catch(error => {
            alert(error.response.data.message)
        })

        this.setState({
            editando: false
        })
    }

    handleEditar = () => {
        this.setState({
            editando: true
        })
    }

    render() {
        let elementoEdita

        if(this.state.editando) {
            elementoEdita = (
                <div>
                    <input type="text" placeholder="Novo nome" value={this.state.novoNome} onChange={this.handleNovoNome} />
                    <input type="email" placeholder="Novo email" value={this.state.novoEmail} onChange={this.handleNovoEmail} />
                    <button onClick={this.editUser}>Salvar</button>
                </div>
            )
        } else {
            elementoEdita = (
                <button onClick={this.handleEditar}>Editar</button>
            )
        }

        return (
            <div>
                {/* operador ternário para alternar entre o jsx para editar o usuário ou não */}
                {this.props.detalhes ? <ConteudoDiv>
                    <button onClick={this.props.stopEdit} className="voltarEdit">Voltar</button>
                    <div className="conteudo-div-descricao">
                        <p>{this.props.name}</p>
                        <p>{this.props.email}</p>
                        {elementoEdita}
                    </div>
                    {this.props.detalhes ? <button onClick={this.props.onClick} id={this.props.id} className="botao2">Excluir usuário ❌</button> : ""}
                </ConteudoDiv> : <div className="invisivel"></div>}
            </div>
            
        )
    }
}

export default DetalhesUsuario