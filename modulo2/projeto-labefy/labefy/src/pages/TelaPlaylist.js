import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

import leftArrow from '../assets/img/left_arrow_icon.png'
import downArrow from '../assets/img/down_arrow_icon.png'
import deleteIcon from '../assets/img/delete_icon.png'

const ContainerPlaylist = styled.section`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 7rem;
`

const TopoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    width: 100%;
`

const PlaylistTitle = styled.h2`
    font-size: 2rem;
`

const TopoAddTrack = styled.p`
    font-size: 1.4rem;
    padding: 0.3rem 0.6rem;
    display: flex;
    align-items: center;
    &:hover {
        box-shadow: 1px 1px 2px 2px #222222;
        border-radius: 10px;
        cursor: pointer;
    }
`

const SectionInputs = styled.section`
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
`

const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    text-align: center;
`

const InputStyled = styled.input`
    margin: 0.1rem 0 0.6rem 0;
    padding: 0.3rem 0.6rem;
    border-radius: 10px;
    width: 100%;
`

const BotaoStyled = styled.button`
    width: 50%;
    padding: 0.3rem 0.6rem;
    margin: 0.6rem 0;
    border-radius: 10px;
    font-size: 1.3rem;
`

const ListaDeTracks = styled.ul` 
    width: 100%;
    margin: 1rem 0;
    padding: 0 1rem;
    list-style-type: none;
    font-size: 1.6rem;
`

const ListaTracksItems = styled.li`
    padding: 0.75rem 1rem;
    margin: 0.8rem 0;
    background-color: purple;
    border-radius: 10px;
    color: white;
    box-shadow: 2px 2px 4px 4px paleturquoise;
`

const TrackDescricao = styled.p`
    margin-left: 1rem;
`

const AudioContainer = styled.div`
    display: flex;
    align-items: center;
`

const ListaTracksAudio = styled.audio`
    width: 100%;
    margin-top: 0.5rem;
`

const AudioImagem = styled.img`
    width: 1.8rem;
    margin-left: 1rem;
    &:hover {
        transform: scale(1.4);
        cursor: pointer;
    }
`

class TelaPlaylist extends React.Component {  
    state = {
        tracks: [],
        trackName: '',
        trackArtista: '',
        trackUrl: '',

        adicionandoTrack: false
    }

    //controladores de input para adicionar tracks
    handleTrackName = (event) => {
        this.setState({trackName: event.target.value})
    }
    handleTrackArtista = (event) => {
        this.setState({trackArtista: event.target.value})
    }
    handleTrackUrl = (event) => {
        this.setState({trackUrl: event.target.value})
    }
    onChangeName = (event) => {
        this.setState({trackName: event.target.value})
    }
    onChangeArtista = (event) => {
        this.setState({trackArtista: event.target.value})
    }
    onChangeUrl = (event) => {
        this.setState({trackUrl: event.target.value})
    }

    getPlaylistTracks = () => {
        if(this.props.idPlaylist !== '') {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`, {
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
            alert(err.response.data.message)
        })
        }
    }

    addTrackToPlaylist = () => {
        const body = {
            name: this.state.trackName,
            artist: this.state.trackArtista,
            url: this.state.trackUrl
        }
    
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`, body, {
            headers: {
                Authorization: 'rafael-correia-freire'
            }
        })
        .then(() => {
            alert('A track foi adicionada à playlist')
        })
        .catch(err => {
            alert(err.response.data.message)
        })
    
        this.setState({
            trackName: '',
            trackArtista: '',
            trackUrl: ''
        })
    }

    removeTrackFromPlaylist = (event) => {
        const playlistId = this.props.idPlaylist
        const trackId = event.target.id
        
        if(window.confirm('Deseja mesmo remover esta track da playlist?')) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`, {
                headers: {
                    Authorization: 'rafael-correia-freire'
                }
            })
            .then(() => {
                alert('A track foi excluída da playlist com sucesso')
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        }
    }

    handleAdicionando = () => {
        this.setState({adicionandoTrack: !this.state.adicionandoTrack})
    }

    componentDidMount = () => {
        this.getPlaylistTracks()
    }

    componentDidUpdate = () => {
        this.getPlaylistTracks()
    }

    render() {
        const playlistTracks = this.state.tracks.map(track => {
            return (
                <ListaTracksItems key={track.id}>
                    <TrackDescricao>{track.name} - {track.artist}</TrackDescricao>
                    <AudioContainer>
                        <ListaTracksAudio controls>
                            <source src={track.url}/>
                            Falha ao carregar audio..
                        </ListaTracksAudio>
                        <AudioImagem 
                            src={deleteIcon} 
                            onClick={this.removeTrackFromPlaylist}
                            id={track.id}
                        />
                    </AudioContainer>
                </ListaTracksItems>
            )
        })

        // verifica se o usuario clicou em adicionar música e renderiza os inputs
        let topAddTrackElemento
        let InputsContainerElemento
        if(this.state.adicionandoTrack) {
            topAddTrackElemento = (
                <TopoAddTrack onClick={this.handleAdicionando}><img src={downArrow} /> Adicione músicas a sua playlist</TopoAddTrack>
            )
            InputsContainerElemento = (
                <ContainerInputs>
                    <label htmlFor='nomeTrack'>Nome da música</label>
                    <InputStyled 
                        value={this.state.trackName} 
                        onChange={this.onChangeName}
                        type='text'
                        id='nomeTrack'
                    />
                    <label htmlFor='artistaTrack'>Artista(s)</label>
                    <InputStyled 
                        value={this.state.trackArtista} 
                        onChange={this.onChangeArtista}
                        type='text'
                        id='artistaTrack'
                    />
                    <label htmlFor='urlTrack'>Url/link</label>
                    <InputStyled 
                        value={this.state.trackUrl} 
                        onChange={this.onChangeUrl}
                        type='text'
                        id='urlTrack'
                    />
                    <BotaoStyled onClick={this.addTrackToPlaylist}>Adicionar Track</BotaoStyled>
            </ContainerInputs>
            )
        } else {
            topAddTrackElemento = (
                <TopoAddTrack onClick={this.handleAdicionando}><img src={leftArrow} /> Adicione músicas a sua playlist</TopoAddTrack>
            )
        }

        return (
            <ContainerPlaylist>
                <TopoContainer>
                    <PlaylistTitle>{this.props.namePlaylist}</PlaylistTitle>
                    {topAddTrackElemento}
                </TopoContainer>
                <SectionInputs>
                    {InputsContainerElemento}
                </SectionInputs>
                <ListaDeTracks>
                    {playlistTracks}
                </ListaDeTracks>
            </ContainerPlaylist>
        )
    }
}

export default TelaPlaylist