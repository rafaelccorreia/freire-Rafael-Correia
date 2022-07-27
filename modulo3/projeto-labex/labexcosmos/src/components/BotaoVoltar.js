import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

import { goBackPage } from '../routes/coordinator'
import BotaoEscuro from './BotaoEscuro';

const BotaoVoltar = (props) => {
    const navigate = useNavigate()

    return(
        <BotaoEscuro
            color={props.color}
            onClick={props.onClick ? props.onClick : ()=> goBackPage(navigate)}
            startIcon={<ReplyAllIcon />}
            texto={'Voltar'}
        />
    )
}

export default BotaoVoltar