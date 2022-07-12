import React from 'react'
import BotaoVoltar from '../components/BotaoVoltar'
import { useParams } from 'react-router-dom'

const TripDetailsPage = () => {
    const pathParams = useParams()
    const idViagem = pathParams.id

    return(
        <div>
            <p>Id da viagem: {idViagem}</p>
            <BotaoVoltar />
        </div>
    )
}

export default TripDetailsPage