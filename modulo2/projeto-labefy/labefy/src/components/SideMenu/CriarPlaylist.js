import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    padding: 0.3rem 0.6rem;
    margin: 0.3rem 0 1rem 0;
    border-radius: 5px;
`

const Botao = styled.button`
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
`

class CriarPlaylist extends React.Component {
    state = {
        valorInputNome: '',
        criandoPlalist: false
    }

    handleValorNome = (event) => {
        this.setState({valorInputNome: event.target.value})
    }

    handleCriandoPlalist = () => {
        this.setState({criandoPlalist: !this.state.criandoPlalist})
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
    }

    render() {
        let criarPlalistElemento
        if(this.state.criandoPlalist) {
            criarPlalistElemento = (
                <ContainerInput>
                    <label htmlFor='nomeNovaPlaylist'>Nome da playlist</label>
                    <Input 
                        id='nomeNovaPlaylist'
                        type='text' 
                        value={this.state.valorInputNome}
                        onChange={this.handleValorNome} 
                    />
                    <Botao onClick={this.createPlaylist}>Adicionar playlist</Botao>
                </ContainerInput>
            )
        }

        return (
            <section>
                <h4 onClick={this.handleCriandoPlalist}>Criar Playlist ➕</h4>
                {criarPlalistElemento}
            </section>
        )
    }
}

export default CriarPlaylist