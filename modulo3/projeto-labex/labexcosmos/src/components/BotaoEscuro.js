import React from 'react'
import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import shadows from '@mui/material/styles/shadows'

import theme from '../theme/theme'

const BotaoEscuro = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Button 
                color={props.color}
                id={props.id}
                endIcon={props.endIcon}
                onClick={props.onClick}
                startIcon={props.startIcon}
                sx={{ button:{ fontWeight: 'bold'}, boxShadow: 13 }}
                variant='contained'
            >
                {props.texto}
            </Button>
        </ThemeProvider>
    )
}

export default BotaoEscuro