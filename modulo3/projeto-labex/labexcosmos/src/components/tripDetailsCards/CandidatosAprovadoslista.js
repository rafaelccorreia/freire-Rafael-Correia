import React from 'react'
import styled from 'styled-components'

const CandidatosAprovadosContainer = styled.div` 
    max-width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    min-width: 300px;
`

const CandidateAprContainer = styled.ul` 
    width: 100%;
    max-width: 460px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: #b9bcbf;
    font-size: 1.3rem;
    border-radius: 10px;
    box-shadow: 2px 2px 7px #24b3d2;
    margin: 1rem 0;
    list-style-type: none;
`

const TituloAprovados = styled.h2` 
    text-align: center;
    font-size: 2rem;
    margin-bottom: 0.5rem;
`

const NomeCandidato = styled.li`  
    color: #121243;
    font-size: 1.3rem;
    margin: 0.5rem 0;
`

const CandidatosAprovadosLista = (props) => {

    let listaAprovados = props.listaAprovados
    let listaAprovadosJsx

    if(listaAprovados.length > 0){
        listaAprovadosJsx = listaAprovados.map(pessoa => {
            return (
                <NomeCandidato key={pessoa.id}>{pessoa.name}</NomeCandidato>
            )
        }) 
    } else {
        listaAprovadosJsx = <NomeCandidato>Não há candidatos aprovados ainda</NomeCandidato>
    }


    return (
        <CandidatosAprovadosContainer>
            <TituloAprovados>Candidatos Aprovados</TituloAprovados>
            <CandidateAprContainer>
                {listaAprovadosJsx}
            </CandidateAprContainer>
        </CandidatosAprovadosContainer>
    )
}

export default CandidatosAprovadosLista