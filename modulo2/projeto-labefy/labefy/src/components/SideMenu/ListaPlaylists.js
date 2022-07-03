import React from 'react'
import styled from 'styled-components'

import deleteIcon from '../../assets/img/delete_icon.png'

const ListaContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 0.5rem 0;
`

const ListaUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    width: 100%;
`

const ListaTitulo = styled.h4`
    font-size: 2rem;
    padding: 1rem;
`

const ListaLi = styled.li`
    margin: 0.5rem 0;
    padding: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
    &:hover {
        cursor: pointer;
        color: black;
        border-left: 1px solid #f2f2f2;
    }
`

const ClickContainer = styled.div`
    width: 100%;
    text-align: start;
    padding: 0.4rem 0;
`

const LiImagem = styled.img`
    width: 1.5rem;
    &:hover {
        transform: scale(1.4);
    }
`

class ListaPlaylists extends React.Component {
    render() {
        const listaDePlaylists = this.props.lista

        const listaAtualizada = listaDePlaylists.map(playlist => {
            return (
                <ListaLi key={playlist.id}>
                    <ClickContainer  
                        onClick={this.props.onClick} 
                        id={playlist.id}
                    >
                        <span id={playlist.id}>{playlist.name}</span>
                    </ClickContainer>
                    <LiImagem src={deleteIcon} 
                        onClick={this.props.delete} 
                        id={playlist.id}
                    />
                </ListaLi>
            )
        })

        return (
            <ListaContainer>
                <ListaTitulo>Minhas Playlists</ListaTitulo>
                <ListaUl>
                    {listaAtualizada}
                </ListaUl>
            </ListaContainer>
        )
    }
}

export default ListaPlaylists