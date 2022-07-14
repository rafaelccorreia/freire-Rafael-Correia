import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import BotaoVoltar from "../components/BotaoVoltar"
import { goToTripsApplication } from "../routes/coordinator"
import BotaoEscuro from "../components/BotaoEscuro"

const ListTripsPage = () => {
    const navigate = useNavigate()
    const [listaViagens, setListaViagens] = useState([])

    //requisição com a API
    const GetTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-correia-freire/trips')
        .then(resp => {
            console.log(resp)
            setListaViagens(resp.data.trips)
        })
        .catch(err => {
            alert(JSON.parse(err.request.responseText).message)
        })
    }

    useEffect(() => {
        GetTrips()
    }, [])

    return (
        <div>
            <BotaoVoltar />
            <BotaoEscuro 
                onClick={() => goToTripsApplication(navigate)}
                texto={'inscrever-se'}
                color={'primary'}
            />
            <p>Lista de Viagens Page</p>
            <ul>
                {listaViagens.map((viagem) => {
                    return (
                        <li key={viagem.id}>
                            <p>Nome: {viagem.name}</p>
                            <p>Descrição: {viagem.description}</p>
                            <p>planeta: {viagem.planet}</p>
                            <p>Duração: {viagem.durationInDays}</p>
                            <p>Data: {viagem.date}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListTripsPage