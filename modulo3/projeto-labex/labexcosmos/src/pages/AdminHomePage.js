import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'

import { goToCreateTrip, goToLogin, goToTripDetails } from '../routes/coordinator'
import BotaoVoltar from '../components/BotaoVoltar'
import BotaoEscuro from '../components/BotaoEscuro'
import CardViagemSimples from '../components/CardViagemSimples'
import TituloDaTela from '../components/TituloDaTela'
import MainContainer from '../components/MainContainer'
import { ProtectedPage } from '../routes/coordinator'
import Header from '../components/Header'

const ConteudoContainer = styled.div` 
    background-color: rgba(18, 43, 67, 0.8);
    min-width: 75%;
    min-height: 80vh;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BotoesContainer = styled.div` 
    min-width: 60%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
`

const ListaContainer = styled.ul` 
    margin: 1rem 0;
    min-width: 60%;
`

const AdminHomePage = () => {
    const navigate = useNavigate()
    ProtectedPage(navigate)

    const [tripsList, setTripsList] = useState([])
    const [token, setToken] = useState('')

    const GetTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-correia-freire/trips')
        .then(resp => {
            setTripsList(resp.data.trips)
        })
        .catch(err => {
            alert(JSON.parse(err.request.responseText).message)
        })
    }

    const DeleteTrip = (event) => {
        const id = event.target.id

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-correia-freire/trips/${id}`, {
            headers: {
                auth: token
            }
        })
        .then(resp => {
            GetTrips()
        })
        .catch(err => {
            alert(JSON.parse(err.request.responseText).message)
        })
    }

    const handleLogOut = () => {
        localStorage.removeItem('token')
        goToLogin(navigate)
    }

    const handleVoltarLogado = () => {
        navigate('../')
    }

    useEffect(() => {
        GetTrips()
        setToken(localStorage.getItem('token'))
    }, [])

    const handleMostraDetalhes = (event) => {
        let id = event.target.id
        goToTripDetails(navigate, id)
    }

    return(
        <div>
            <Header />
            <MainContainer>
                <ConteudoContainer>
                    <TituloDaTela 
                        titulo={'Painel Administrativo'}
                        color={'#d7d7d7'}
                    />
                    <BotoesContainer>
                        <BotaoVoltar 
                            color={'neutral'}
                            onClick={handleVoltarLogado}
                        />
                        <BotaoEscuro 
                            onClick={() => goToCreateTrip(navigate)}
                            color={'neutral'}
                            texto={'Criar Viagem'}
                        />
                        <BotaoEscuro 
                            onClick={handleLogOut}
                            color={'neutral'}
                            texto={'Log Out'}
                            endIcon={<LogoutIcon />}
                        />
                    </BotoesContainer>
                    <ListaContainer>
                        {tripsList.map(trip => {
                            return(
                                <CardViagemSimples 
                                    key={trip.id}
                                    id={trip.id}
                                    onClick={handleMostraDetalhes}
                                    tituloViagem={trip.name}
                                    deleteViagem={DeleteTrip}
                                />
                            )
                        })}
                    </ListaContainer>
                </ConteudoContainer>
            </MainContainer>
        </div>
    )
}

export default AdminHomePage