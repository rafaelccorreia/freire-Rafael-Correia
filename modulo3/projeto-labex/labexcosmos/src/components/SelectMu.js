import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { ThemeProvider } from '@mui/material/styles'
import axios from 'axios'
import { bgcolor, maxWidth } from '@mui/system'

import theme from '../theme/theme'
import { ListaDepaises } from '../constants/listaDePaises'

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

export const SelectTrip = (props) => {
    const [listaViagens, setListaViagens] = React.useState([])
    //requisição com a API
    const GetTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-correia-freire/trips')
        .then(resp => {
            setListaViagens(resp.data.trips)
        })
        .catch(err => {
            alert(JSON.parse(err.request.responseText).message)
        })
    }

    React.useEffect(() => {
        GetTrips()
    }, [])

    const selectOptions = listaViagens.map(viagem => {
        return (
            <MenuItem value={viagem.name} key={viagem.id} id={viagem.id}>{viagem.name}</MenuItem>
        )
    })


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
                <InputLabel id="select-trip-label">Escolha uma Viagem</InputLabel>
                <Select
                    labelId="select-trip-label"
                    id="select-trip-label"
                    value={props.value}
                    onChange={props.onChange}
                >
                    <MenuItem value="">
                        <em>Escolha uma Viagem</em>
                    </MenuItem>
                    {selectOptions}
                </Select>
            </FormControl>
        </ThemeProvider>
    )
}

export const SelectCountry = (props) => {
    const listaPaises = ListaDepaises

    const selectOptionsPais = listaPaises.map(pais => {
        return (
            <MenuItem value={pais.nome} key={pais.sigla3}>{pais.nome}</MenuItem>
        )
    })


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
                <InputLabel id="select-country-label">Escolha um País</InputLabel>
                <Select
                    labelId="select-country-label"
                    id="select-country-label"
                    value={props.value}
                    onChange={props.onChange}
                >
                    <MenuItem value="">
                        <em>Escolha um País</em>
                    </MenuItem>
                    {selectOptionsPais}
                </Select>
            </FormControl>
        </ThemeProvider>
    )
}