import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBackPage } from '../routes/coordinator'

const BotaoVoltar = () => {
    const navigate = useNavigate()

    return(
        <button onClick={() => goBackPage(navigate)}>Voltar</button>
    )
}

export default BotaoVoltar