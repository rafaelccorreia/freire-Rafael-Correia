import { eventWrapper } from "@testing-library/user-event/dist/utils"
import React from "react"
import axios from "axios"

class DetalhesUsuario extends React.Component {
    state = {
        editando: false,
        novoNome: "",
        novoEmail: ""
    }

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
            alert(error.message)
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
                {this.props.detalhes ? <div className="conteudo-div">
                    <button onClick={this.props.stopEdit} className="voltarEdit">Voltar</button>
                    <div className="conteudo-div-descricao">
                        <p>{this.props.name}</p>
                        <p>{this.props.email}</p>
                        {elementoEdita}
                    </div>
                    {this.props.detalhes ? <button onClick={this.props.onClick} id={this.props.id} className="botao2">Excluir usuário ❌</button> : ""}
                </div> : <div className="invisivel"></div>}
            </div>
            
        )
    }
}

export default DetalhesUsuario