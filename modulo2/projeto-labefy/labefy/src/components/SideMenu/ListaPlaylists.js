import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

class ListaPlaylists extends React.Component {
    state = {
        listaDePlaylists: []
    }

    componentDidMount = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: "rafael-correia-freire"
            }
        })
        .then(resp => {
            this.setState({listaDePlaylists: resp.data.result.list})
        })
        .catch(err => {
            alert(err.response.data.message)
        })
    }

    render() {
        const listaAtualizada = this.state.listaDePlaylists.map(playlist => {
            return <li key={playlist.id}>{playlist.name}</li>
        })

        return (
            <section>
                {listaAtualizada}
            </section>
        )
    }
}

export default ListaPlaylists