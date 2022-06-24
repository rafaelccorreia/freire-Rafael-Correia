import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

class TelaInicial extends React.Component {
    state = {
        idPlaylist: this.props.idPlaylist,
        tracks: []
    }

    getPlaylistTracks = () => {
        this.state.idPlaylist && axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`, {
            headers: {
                Authorization: 'rafael-correia-freire'
            }
        })
        .then(resp => {
            this.setState({
                tracks: resp.data.result.tracks
            })
        })
        .catch(err => {
            alert('requisição falhou :(')
        })
    }

    componentDidMount = () => {
        this.getPlaylistTracks()
    }
    
    render() {
        return (
            <section></section>
        )
    }
}

export default TelaInicial