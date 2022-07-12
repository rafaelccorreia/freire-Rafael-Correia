import React from 'react'
import BotaoVoltar from '../components/BotaoVoltar'

const ApplicationFormPage = () => {
    const enviarFormulario = () => {
        //requisição aqui
    }

    return (
        <div>
            Formulário de inscrição para viagem
            <BotaoVoltar />
            <button onClick={enviarFormulario}>Enviar</button>
        </div>
    )
}

export default ApplicationFormPage