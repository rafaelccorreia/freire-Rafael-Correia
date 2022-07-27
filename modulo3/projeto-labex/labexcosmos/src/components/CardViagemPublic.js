import React from 'react'
import styled from 'styled-components'

const CardViagemPublicContainer = styled.li`
    background-color: #b9bcbf;
    flex-direction: column;
    border-radius: 10px;
    justify-content: space-between;
    display: flex;
    width: 100%;
    padding: 1rem;
    transition: 1.5s;
    box-shadow: 2px 2px 7px #24b3d2;
    &:hover {
        cursor: pointer;
    }
    &:active {
        transform: scale(1.3);
        border: 3px solid black;
    }
`

const CardPDescricao = styled.p` 
    color: #122b43;
    font-size: 1.3rem;
`

const CardPTitulo = styled.span` 
    color: #121243;
    font-weight: bold;
    margin-right: 0.4rem;
    font-size: 1.3rem;
`

const CardViagemPublic = (props) => {
    return(
        <CardViagemPublicContainer key={props.id}>
            <CardPDescricao><CardPTitulo>Nome: </CardPTitulo>{props.name}</CardPDescricao>
            <CardPDescricao><CardPTitulo>Descrição: </CardPTitulo>{props.description}</CardPDescricao>
            <CardPDescricao><CardPTitulo>Planeta: </CardPTitulo>{props.planet}</CardPDescricao>
            <CardPDescricao><CardPTitulo>Duração: </CardPTitulo>{props.durationInDays} dias</CardPDescricao>
            <CardPDescricao><CardPTitulo>Data: </CardPTitulo>{props.date}</CardPDescricao>
        </CardViagemPublicContainer>
    )
}

export default CardViagemPublic