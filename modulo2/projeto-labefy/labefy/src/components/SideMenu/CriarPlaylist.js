import React from 'react'
import styled from 'styled-components'

import plusIcon from '../../assets/img/plus_icon.png'

const AdicionaTitulo = styled.h4`
    display: flex;
    align-items: center;
    height: 5rem;
    font-size: 1.5rem;
    width: 100%;
    justify-content: space-evenly;
    &:hover {
        box-shadow: 1px 1px 2px 2px #f2f2f2;
        border-radius: 10px;
        cursor: pointer;
    }
`

const AdicionaImg = styled.img`
    width: 3rem;
    height: 3rem;
`

const ContainerAdiciona = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 200px;
    margin: 0.5rem 0;
    outline: 1px 1px solid #f2f2f2;
`

const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
        criandoPlalist: false
    }

    handleCriandoPlalist = () => {
        this.setState({criandoPlalist: !this.state.criandoPlalist})
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
                        value={this.props.inputValue}
                        onChange={this.props.onChangeInput} 
                    />
                    <Botao onClick={this.props.onClick}>Adicionar playlist</Botao>
                </ContainerInput>
            )
        }

        return (
            <ContainerAdiciona>
                <AdicionaTitulo 
                    onClick={this.handleCriandoPlalist}
                    ><span>Criar Playlist</span><AdicionaImg src={plusIcon}/>
                </AdicionaTitulo>
                {criarPlalistElemento}
            </ContainerAdiciona>
        )
    }
}

export default CriarPlaylist