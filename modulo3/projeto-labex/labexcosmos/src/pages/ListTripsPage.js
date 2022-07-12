import React from "react"
import { useNavigate } from "react-router-dom"

import BotaoVoltar from "../components/BotaoVoltar"
import { goToTripsApplication } from "../routes/coordinator"

const ListTripsPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <BotaoVoltar />
            <button onClick={() => goToTripsApplication(navigate)}>Inscrever-se</button>
            <p>Lista de Viagens Page</p>
        </div>
    )
}

export default ListTripsPage