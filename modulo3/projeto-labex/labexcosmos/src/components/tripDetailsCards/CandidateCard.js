import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import BotaoEscuro from '../BotaoEscuro'

const CandidatosPendentesContainer = styled.div` 
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.5rem 0;
    max-width: 100%;
    min-width: 300px;
`

const CandidateCardContainer = styled.div` 
    background: #b9bcbf;
    border-radius: 10px;
    box-shadow: 2px 2px 7px #24b3d2;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    justify-content: space-evenly;
    margin: 1rem 0;
    min-width: 100%;
    padding: 1rem;
    max-width: 600px;
`

const TituloPendentes = styled.h2` 
    font-size: 2rem;
    text-align: center;
`

const DadosP = styled.p`
    color: #121243;
    margin: 0.5rem;
`

const DadosTitulo = styled.strong`  
    color: #121243;
    margin-right: 1rem;
`

const BotoesContainer = styled.div` 
    display: flex;
    justify-content: space-evenly;
    margin: 1rem;
`

const CandidateCard = (props) => {
    
    const DecideCandidate = (event, decide) => {
        console.log(event.target)
        const token = localStorage.getItem('token')
        const body = {
            aprove: decide
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-correia-freire/trips/${event.target.tripId}/candidates/${event.target.id}/decide`, body, {
            headers: {
                auth: token
            }
        })
        .then(resp => {
            console.log(resp)
        })
        .catch(err => {
            console.log(err)
        })
    }

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
                        onClick={(event) => props.onClick(event, false)}
                    />
                    <BotaoEscuro 
                        texto={'Aprovar'}
                        color={'primary'}
                        id={props.id}
                        onClick={(event) => props.onClick(event, true)}
                    />
                </BotoesContainer>
            </CandidateCardContainer>
        )
    }

    return (
        <CandidatosPendentesContainer key={props.id}>
            {nomeDeVariavelDecente}
        </CandidatosPendentesContainer>
    )
}

export default CandidateCard