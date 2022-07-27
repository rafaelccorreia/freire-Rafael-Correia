import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

import BotaoVoltar from "../components/BotaoVoltar"
import { goToTripsApplication } from "../routes/coordinator"
import BotaoEscuro from "../components/BotaoEscuro"
import MainContainer from "../components/MainContainer"
import TituloDaTela from "../components/TituloDaTela"
import CardViagemPublic from "../components/CardViagemPublic"
import Header from "../components/Header"

const TripsPublicContainer = styled.div` 
    background-color: rgba(185, 188, 191, 0.8);
    min-width: 75%;
    min-height: 80vh;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ButtonContainer = styled.div` 
    min-width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;
`

const ListaServicosContainer = styled.ul`
    background-color: #122b43;
    border-radius: 10px;
    padding: 1rem;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    grid-auto-rows: 17rem;
    grid-gap: 1rem;
    width: 100%;
    margin-bottom: 1rem;
`

const ListTripsPage = () => {
    const navigate = useNavigate()
    const [listaViagens, setListaViagens] = useState([])

    //requisição com a API
    const GetTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-correia-freire/trips')
        .then(resp => {
            setListaViagens(resp.data.trips)
        })
        .catch(err => {
            alert(JSON.parse(err.request.responseText).message)
        })
    }

    const listaViagensJsx = listaViagens.map((viagem) => {
        let data = new Date(viagem.date)
        let dataFormatada = ((data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear())) 

        return (
            <CardViagemPublic 
                id={viagem.id}
                name={viagem.name}
                description={viagem.description}
                planet={viagem.planet}
                durationInDays={viagem.durationInDays}
                date={viagem.date}
                key={viagem.id}
            />
        )
    })

    useEffect(() => {
        GetTrips()
    }, [])

    return (
        <div>
            <Header />
            <MainContainer>
                <TripsPublicContainer>
                    <ButtonContainer>
                        <BotaoVoltar 
                            color={'primary'}
                        />
                        <BotaoEscuro 
                            onClick={() => goToTripsApplication(navigate)}
                            texto={'inscrever-se'}
                            color={'primary'}
                        />
                    </ButtonContainer>
                    <TituloDaTela
                        titulo={'Lista de Viagens'}
                        color={'#121243'}
                    />
                    <ListaServicosContainer>
                        {listaViagensJsx}
                    </ListaServicosContainer>
                </TripsPublicContainer>
            </MainContainer>
        </div>
    )
}

export default ListTripsPage