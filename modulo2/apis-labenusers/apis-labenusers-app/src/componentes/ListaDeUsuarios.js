import React from "react"
import axios from "axios"

class ListaDeUsuarios extends React.Component {
    state = {
        valorInputSearch: "",
        usuarios: []
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
                <li key={usuario.id}>
                    {usuario.name}
                    <button type="button" onClick={this.deleteUser} id={usuario.id} >❌</button>
                </li>
            )
        })

        return (
            <div>
                <button onClick={this.props.onClick}>Trocar de tela</button>
                <ul>
                    {listaUsuarios}
                </ul>
            </div>
        )
    }
}

export default ListaDeUsuarios