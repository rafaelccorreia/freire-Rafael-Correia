import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

import BotaoVoltar from '../components/BotaoVoltar'
import MainContainer from '../components/MainContainer'
import TituloDaTela from '../components/TituloDaTela'
import TripDetailsCard from '../components/tripDetailsCards/TripDetailsCard'
import CandidateCard from '../components/tripDetailsCards/CandidateCard'
import CandidatosAprovadosLista from '../components/tripDetailsCards/CandidatosAprovadoslista'
import { ProtectedPage } from '../routes/coordinator'
import Header from '../components/Header'

const ContentContainer = styled.div` 
    background-color: rgba(18, 43, 67, 0.8);
    width: 90%;
    min-height: 90vh;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CandidatesContainer = styled.div` 
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    @media (max-width: 830px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
`

const CandidatosPendentesContainer2 = styled.div` 
    max-width: 45%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TituloPendentes = styled.h2` 
    font-size: 2rem;
    text-align: center;
    margin-top: 2rem;
`

const TripDetailsPage = () => {
    const navigate = useNavigate()
    ProtectedPage(navigate)
    
    //recebe o id dos params da url
    const pathParams = useParams()
    const idViagem = pathParams.id

    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])
    const [aprovados, setAprovados] = useState([])

    //requisição para pegar os detalhes da viagem
    const GetTripDetail = () => {
        const token = localStorage.getItem('token')
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-correia-freire/trip/${idViagem}`, {
            headers: {
                auth: token
            }
        })
        .then(resp => {
            setTrip(resp.data.trip)
            setCandidates(resp.data.trip.candidates)
            setAprovados(resp.data.trip.approved)
        })
        .catch(err => {
            alert(JSON.parse(err.request.responseText).message)
        })
    }

    const DecideCandidate = (event, decide) => {
        console.log(event.target)
        const token = localStorage.getItem('token')
        const body = {
            approve: decide
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-correia-freire/trips/${idViagem}/candidates/${event.target.id}/decide`, body, {
            headers: {
                auth: token
            }
        })
        .then(() => {
            alert('Candidato aprovado com sucesso!')
        })
        .catch(err => {
            alert(JSON.parse(err.request.responseText).message)
        })
    }

    useEffect(() => {
        GetTripDetail()
    }, [candidates, aprovados])

    const DadosTrip = (
        <TripDetailsCard 
            name={trip.name}
            description={trip.description}
            durationInDays={trip.durationInDays}
            planet={trip.planet}
            date={trip.date}
        />
    )

    let DadosCandidate 
    if(candidates.length > 0) {
        DadosCandidate= candidates.map((candidate) => {
            return (
                <CandidateCard 
                    name={candidate.name}
                    profession={candidate.profession}
                    age={candidate.age}
                    country={candidate.country}
                    applicationText={candidate.applicationText}
                    id={candidate.id}
                    key={candidate.id}
                    onClick={DecideCandidate}
                />
            )
        })
    } else {
        DadosCandidate = (
            <CandidateCard 
                vazio={'vazio'}
            />
        )
    }

    return(
        <div>
            <Header />
            <MainContainer>
                <ContentContainer>
                    <TituloDaTela 
                        color={'#d7d7d7'}
                        titulo={trip.name}
                    />
                    {DadosTrip}
                    <BotaoVoltar 
                        color={'neutral'}
                    />
                    <CandidatesContainer>
                        <CandidatosPendentesContainer2>
                            <TituloPendentes>Candidatos Pendentes</TituloPendentes>
                            {DadosCandidate}    
                        </CandidatosPendentesContainer2>
                        <CandidatosAprovadosLista 
                            listaAprovados={aprovados}
                        />
                    </CandidatesContainer>
                </ContentContainer>
            </MainContainer>
        </div>
    )
}

export default TripDetailsPage