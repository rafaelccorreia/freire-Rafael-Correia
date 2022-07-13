import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBackPage } from '../routes/coordinator'
import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../theme/theme'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

const BotaoVoltar = () => {
    const navigate = useNavigate()

    return(
        <ThemeProvider theme={theme}>
            <Button 
            variant='contained'
            startIcon={<ReplyAllIcon />}
            color='primary'
            onClick={()=> goBackPage(navigate)}
            >
            Voltar
            </Button>
        </ThemeProvider>
    )
}

export default BotaoVoltar