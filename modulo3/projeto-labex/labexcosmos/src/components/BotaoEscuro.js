import React from 'react'
import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../theme/theme'

const BotaoEscuro = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Button 
            variant='contained'
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            color={props.color}
            onClick={props.onClick}
            >
                {props.texto}
            </Button>
        </ThemeProvider>
    )
}

export default BotaoEscuro