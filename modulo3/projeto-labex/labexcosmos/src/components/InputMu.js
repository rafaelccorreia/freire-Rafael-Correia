import { TextField } from "@mui/material";
import React from "react";
import { ThemeProvider } from '@mui/material/styles'

import theme from "../theme/theme";

const InputMu = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <TextField
                sx={{   input: {color: `${props.fontColor}`, background: `${props.backColor}`, borderRadius: '10px' },
                        label: {color: `${props.fontColor}`, fontWeight: 'bold' }}}
                id={props.id}
                label={props.label}
                type={props.type}
                variant='filled'
                margin="normal"
                color={props.color}
                value={props.value}
                onChange={props.onChange}
                fullWidth
            />
        </ThemeProvider>
    )
}

export default InputMu