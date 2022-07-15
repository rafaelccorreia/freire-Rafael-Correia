import React from 'react'
import styled from 'styled-components'

import BotaoEscuro from '../BotaoEscuro'

const CandidatosPendentesContainer = styled.div` 
    max-width: 100%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
`

const CandidateCardContainer = styled.div` 
    min-width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: #b9bcbf;
    font-size: 1.3rem;
    border-radius: 10px;
    box-shadow: 2px 2px 7px #24b3d2;
    margin: 1rem 0;
`

const TituloPendentes = styled.h2` 
    text-align: center;
    font-size: 2rem;
`

const DadosP = styled.p`
    margin: 0.5rem;
    color: #121243;
`

const DadosTitulo = styled.strong`  
    margin-right: 1rem;
    color: #121243;
`

const BotoesContainer = styled.div` 
    display: flex;
    justify-content: space-evenly;
    margin: 1rem;
`

const CandidateCard = (props) => {
    let nomeDeVariavelDecente
    if(props.vazio === 'vazio') {
        nomeDeVariavelDecente = (
            <CandidateCardContainer>
                <DadosP>Não há candidatos pendentes no momento.</DadosP>
            </CandidateCardContainer>
        )
    } else {
        nomeDeVariavelDecente = (
            <CandidateCardContainer key={props.id}>
                <DadosP>{props.vazio}</DadosP>
                <DadosP><DadosTitulo>Nome: </DadosTitulo>{props.name}</DadosP>
                <DadosP><DadosTitulo>Profissão: </DadosTitulo>{props.profession}</DadosP>
                <DadosP><DadosTitulo>Idade: </DadosTitulo>{props.age}</DadosP>
                <DadosP><DadosTitulo>País: </DadosTitulo>{props.country}</DadosP>
                <DadosP><DadosTitulo>Texto de Candidatura: </DadosTitulo>{props.applicationText}</DadosP>
                <BotoesContainer>
                    <BotaoEscuro 
                        texto={'Reprovar'}
                        color={'primary'}
                        id={props.id}
                    />
                    <BotaoEscuro 
                        texto={'Aprovar'}
                        color={'primary'}
                        id={props.id}
                    />
                </BotoesContainer>
            </CandidateCardContainer>
        )
    }

    return (
        <CandidatosPendentesContainer key={props.id}>
            <TituloPendentes>Candidatos Pendentes</TituloPendentes>
            {nomeDeVariavelDecente}
        </CandidatosPendentesContainer>
    )
}

export default CandidateCard