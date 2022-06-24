import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import CriarPlaylist from './CriarPlaylist'
import ListaPlaylists from './ListaPlaylists'

const SideMenuContainer = styled.section`
    width: 35%;
    padding: 1rem 2rem;
    background-color: purple;
    color: #f2f2f2;
    height: auto;
    min-height: 100vh;
`

class SideMenu extends React.Component {
    state = {
        listaDePlaylists: [],
        valorInputNome: '',
    }

    handleValorNome = (event) => {
        this.setState({valorInputNome: event.target.value})
    }

    getAllPlaylists = () => {
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

    createPlaylist = () => {
        const body = {
            name: this.state.valorInputNome
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
            headers: {
                Authorization: 'rafael-correia-freire'
            }
        })
        .then(resp => {
            alert('Playlist adicionada com sucesso!')
        })
        .catch(err => {
            alert(err.response.data.message)
        })

        this.setState({valorInputNome: ""})

        this.getAllPlaylists()
    }

    deletePlaylist = (event) => {
        const playlistId = event.target.id
        if(window.confirm('Tem certeza que deseja deletar esta playlist?')) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
                headers: {
                    Authorization: 'rafael-correia-freire'
                }
            })
            .then(() => {
                alert('Playlist deletada com sucesso')
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        }

        this.getAllPlaylists()
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    componentDidUpdate = () => {
        this.getAllPlaylists()
    }

    render() {
        return (
            <SideMenuContainer>
                <CriarPlaylist 
                    onClick={this.createPlaylist}
                    inputValue={this.state.valorInputNome}
                    onChangeInput={this.handleValorNome}
                />
                <ListaPlaylists
                    lista={this.state.listaDePlaylists}
                    delete={this.deletePlaylist}
                    onClick={this.props.onClick}
                />
            </SideMenuContainer>
        )
    }
}

export default SideMenu