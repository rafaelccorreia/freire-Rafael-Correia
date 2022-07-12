import React from 'react'
import { useNavigate } from 'react-router-dom'
import BotaoVoltar from '../components/BotaoVoltar'
import { goToCreateTrip, goToTripDetails } from '../routes/coordinator'

const AdminHomePage = () => {
    const navigate = useNavigate()

    const handleMostraDetalhes = (event) => {
        let id = event.target.id
        goToTripDetails(navigate, id)
    }

    return(
        <div>
            <h2>Painel Administrativo</h2>
            <div>
                <BotaoVoltar />
                <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
                <button>Log out</button>
            </div>
            <ul>
                <li key={0} id={0} onClick={handleMostraDetalhes}>viagem</li>
            </ul>
        </div>
    )
}

export default AdminHomePage