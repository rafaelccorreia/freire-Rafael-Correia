import React from "react"
import axios from "axios"
import DetalhesUsuario from "./DetalhesUsuario"

class ListaDeUsuarios extends React.Component {
    state = {
        valorInputSearch: "",
        usuarios: [],
        detalhes: false,
        nameDetalhes: "",
        emailDetalhes: "",
        idDetalhes: ""
    }

    getAllUsers = () => {
        const requestUsuarios = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "rafael-correia-freire"
            }
        })

        requestUsuarios.then((response) => {
            this.setState({
                usuarios: response.data
            })
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    deleteUser = (event) => {
        if(window.confirm(`Tem certeza que deseja deletar este usuário?`)){
            const id = event.target.id
    
            const requestExcluir = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
                headers: {
                    Authorization: "rafael-correia-freire"
                }
            })
    
            requestExcluir.then(() => {
                alert('Usuário excluído com sucesso')
            }).catch(error => {
                alert(error.message)
            })

            this.setState({
                nameDetalhes: "",
                emailDetalhes: "",
                detalhes: false
            })
        }
    }

    stopEdit = () => {
        this.setState({
            detalhes: false
        })
    }

    handleDetalhes = (event) => {
        const id = event.target.id
        if(this.state.detalhes) {
            this.setState({
                nameDetalhes: "",
                emailDetalhes: "",
                detalhes: false
            })
        }
        else {
            const getUserById = axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
                headers: {
                    Authorization: "rafael-correia-freire"
                }
            })

            getUserById.then((response) => {
                this.setState({
                    nameDetalhes: "Nome: " + response.data.name,
                    emailDetalhes: "Email: " + response.data.email,
                    detalhes: true,
                    idDetalhes: response.data.id
                })
            })
            .catch(error => {
                alert(error.message)
            })
        }
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    componentDidUpdate = () => {
        this.getAllUsers()
    }

    render() {
        const listaUsuarios = this.state.usuarios.map(usuario => {
            return (
                <li key={usuario.id} id={usuario.id}>
                    <span id={usuario.id} onClick={this.handleDetalhes}>{usuario.name}</span>
                    <button type="button" onClick={this.deleteUser} id={usuario.id}>❌</button>
                </li>
            )
        })

        return (
            <div className="tela-lista">
                <button onClick={this.props.onClick} className="botao">Trocar de tela</button>
                <div className="tela-lista-conteúdo">
                    <ul className="conteudo-lista">
                        <h2>Lista de usuários</h2>
                        {listaUsuarios}
                    </ul>
                    <DetalhesUsuario
                        name={this.state.nameDetalhes}
                        email={this.state.emailDetalhes}
                        onClick={this.deleteUser}
                        detalhes={this.state.detalhes}
                        id={this.state.idDetalhes}
                        stopEdit={this.stopEdit}
                    />
                </div>
            </div>
        )
    }
}

export default ListaDeUsuarios