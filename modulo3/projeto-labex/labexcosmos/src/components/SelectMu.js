import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { ThemeProvider } from '@mui/material/styles'

import theme from '../theme/theme'
import { bgcolor, maxWidth } from '@mui/system'

export const SelectPlanet = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <FormControl 
                variant="filled" 
                fullWidth
                sx={{ 
                    label: {color: 'primary.main', fontWeight: 'bold'}, 
                    input: {color: 'primary.main'}, 
                    bgcolor: 'neutral.main',
                    borderRadius: '10px',
                    margin: '1rem 0 0.5rem 0',
                    paddig: '1rem 0'
                }}
            >
                <InputLabel id="select-planet-label">Escolha um planeta</InputLabel>
                <Select
                    labelId="select-planet-label"
                    id="select-planet-label"
                    value={props.value}
                    onChange={props.onChange}
                >
                    <MenuItem value="">
                    <em>Escolha um planeta</em>
                    </MenuItem>
                    <MenuItem value={'mercurio'}>Mercúrio</MenuItem>
                    <MenuItem value={'venus'}>Vênus</MenuItem>
                    <MenuItem value={'terra'}>Terra</MenuItem>
                    <MenuItem value={'marte'}>Marte</MenuItem>
                    <MenuItem value={'terra'}>Júpter</MenuItem>
                    <MenuItem value={'saturno'}>Saturno</MenuItem>
                    <MenuItem value={'urano'}>Urano</MenuItem>
                    <MenuItem value={'netuno'}>Netuno</MenuItem>
                    <MenuItem value={'plutao'}>Plutão</MenuItem>
                </Select>
            </FormControl>
        </ThemeProvider>
    )
}