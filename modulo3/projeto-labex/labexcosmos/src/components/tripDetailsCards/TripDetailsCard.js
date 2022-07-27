import React from 'react'
import styled from 'styled-components'

const TripDetailCardContainer = styled.div` 
    min-width: 50%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: #b9bcbf;
    font-size: 1.3rem;
    border-radius: 10px;
    box-shadow: 2px 2px 7px #24b3d2;
    margin-bottom: 1rem;
`

const DadosP = styled.p`
    margin: 0.5rem;
    color: #121243;
`

const DadosTitulo = styled.strong`  
    margin-right: 1rem;
    color: #121243;
`

const TripDetailsCard = (props) => {
    return(
        <TripDetailCardContainer>
            <DadosP><DadosTitulo>Nome: </DadosTitulo>{props.name}</DadosP>
            <DadosP><DadosTitulo>Descrição: </DadosTitulo>{props.description}</DadosP>
            <DadosP><DadosTitulo>Planeta: </DadosTitulo>{props.planet}</DadosP>
            <DadosP><DadosTitulo>Duração: </DadosTitulo>{props.durationInDays}</DadosP>
            <DadosP><DadosTitulo>Data: </DadosTitulo>{props.date}</DadosP>
        </TripDetailCardContainer>
    )
}

export default TripDetailsCard