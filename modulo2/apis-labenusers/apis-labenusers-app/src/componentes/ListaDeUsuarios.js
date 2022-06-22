import React from "react"
import axios from "axios"
import DetalhesUsuario from "./DetalhesUsuario"
import styled from "styled-components"

const TelaLista = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
`

const ListaUsuariosContainer = styled.ul`
    margin: 2rem 1rem;
` 

const ListaUsuariosLi = styled.li`
    margin: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    padding: 0 1rem;
    border: 1px solid black;
    border-radius: 5px;
`

class ListaDeUsuarios extends React.Component {
    state = {
        valorInputSearch: "",
        usuarios: [],
        //states usados para tela detalhes
        detalhes: false,
        nameDetalhes: "",
        emailDetalhes: "",
        idDetalhes: ""
    }

    // requisição da api para solicitar a lista de usuários cadastrados
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
            console.log(error.response.data.message)
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

    // Fechar a tela de detalhes ao clicar em votlar
    stopEdit = () => {
        this.setState({
            detalhes: false
        })
    }
    // Abrir a página de detalhes ao clicar em um usuário
    handleDetalhes = (event) => {
        const id = event.target.id
        if(this.state.detalhes) {
            this.setState({
                nameDetalhes: "",
                emailDetalhes: "",
                detalhes: false
            })
        }
        // faz a requisição dos dados do usuário
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
                alert(error.response.data.message)
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
                <ListaUsuariosLi key={usuario.id} id={usuario.id} onClick={this.handleDetalhes}>
                    <span id={usuario.id}>{usuario.name}</span>
                    <button type="button" onClick={this.deleteUser} id={usuario.id}>❌</button>
                </ListaUsuariosLi>
            )
        })

        return (
            <TelaLista>
                <button onClick={this.props.onClick} className="botao">Trocar de tela</button>
                <div>
                    <ListaUsuariosContainer>
                        <h2>Lista de usuários</h2>
                        {listaUsuarios}
                    </ListaUsuariosContainer>
                    {/* componente de detalhes que aparecerá ao clicar no usuário */}
                    <DetalhesUsuario
                        name={this.state.nameDetalhes}
                        email={this.state.emailDetalhes}
                        onClick={this.deleteUser}
                        detalhes={this.state.detalhes}
                        id={this.state.idDetalhes}
                        stopEdit={this.stopEdit}
                    />
                </div>
            </TelaLista>
        )
    }
}

export default ListaDeUsuarios