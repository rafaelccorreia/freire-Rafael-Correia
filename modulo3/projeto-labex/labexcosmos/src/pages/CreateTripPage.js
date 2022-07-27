import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import BotaoVoltar from '../components/BotaoVoltar'
import BotaoEscuro from '../components/BotaoEscuro'
import MainContainer from '../components/MainContainer'
import TituloDaTela from '../components/TituloDaTela'
import InputMu from '../components/InputMu'
import { SelectPlanet } from '../components/SelectMu'
import { ProtectedPage } from '../routes/coordinator'
import Header from '../components/Header'

const FormMainContainer = styled.div` 
    background-color: rgba(18, 43, 67, 0.8);
    min-width: 75%;
    min-height: 80vh;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`   

const FormElementoContainer = styled.form` 
    min-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InputsContainer = styled.div`
    margin: 1rem;
    min-width: 75%;
    max-width: 800px;
`

const BotoesContainer = styled.div` 
    display: flex;
    justify-content: space-around;
    min-width: 60%;
    margin: 1rem;
`

const CreateTripPage = () => {
    const navigate = useNavigate()
    ProtectedPage(navigate)

    const [valorTituloViagem, setValorTituloViagem] = useState('')
    const [valorDataViagem, setValorDataViagem] = useState('')
    const [valorDescricaoViagem, setValorDescricaoViagem] = useState('')
    const [valorDuracaoViagem, setValorDuracaoViagem] = useState('')
    const [valorPlanetaViagem, setValorPlanetaViagem] = useState('')
    const token = window.localStorage.getItem('token')

    //Controladores de input
    const handleTituloViagem = (event) => {
        setValorTituloViagem(event.target.value)
    }
    const handleDataViagem = (event) => {
        console.log(event.target.value)
        setValorDataViagem(event.target.value)
    }
    const handlePlanetaViagem = (event) => {
        setValorPlanetaViagem(event.target.value)
    }
    const handleDescricaoViagem = (event) => {
        setValorDescricaoViagem(event.target.value)
    }
    const handleDuracaoViagem = (event) => {
        setValorDuracaoViagem(event.target.value)
    }

    //requisição para criar viagem
    const CreateTrip = () => {
        const body = {
            name: valorTituloViagem,
            planet: valorPlanetaViagem,
            date: valorDataViagem,
            description: valorDescricaoViagem,
            durationInDays: Number(valorDuracaoViagem)
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-correia-freire/trips`, body, {
            headers: {
                auth: token
            }
        })
        .then(() => {
            alert('Viagem adicionada com sucesso!')
            setValorDataViagem('')
            setValorDescricaoViagem('')
            setValorDuracaoViagem('')
            setValorPlanetaViagem('')
            setValorTituloViagem('')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <Header />
            <MainContainer>
                <FormMainContainer>
                    <TituloDaTela 
                        color={'#d7d7d7'}
                        titulo={'Criar Viagem'}
                    />
                    <FormElementoContainer>
                        <InputsContainer>
                            <InputMu 
                                backColor={'#b9bcbf'}
                                color={'primary'}
                                fontColor={'#122b43'}
                                label={'Título da Viagem'}
                                id={'tituloViagemCriar'}
                                onChange={handleTituloViagem}
                                type={'text'}
                                value={valorTituloViagem}
                            />
                            <SelectPlanet 
                                backColor={'#b9bcbf'}
                                color={'primary'}
                                fontColor={'#122b43'}
                                value={valorPlanetaViagem}
                                onChange={handlePlanetaViagem}
                            />
                            <InputMu 
                                backColor={'#b9bcbf'}
                                color={'primary'}
                                fontColor={'#122b43'}
                                label={''}
                                id={'dataViagemCriar'}
                                onChange={handleDataViagem}
                                type={'date'}
                                value={valorDataViagem}
                            />
                            <InputMu 
                                backColor={'#b9bcbf'}
                                color={'primary'}
                                fontColor={'#122b43'}
                                label={'Descrição'}
                                id={'descricaoViagemLabue'}
                                onChange={handleDescricaoViagem}
                                type={'text'}
                                value={valorDescricaoViagem}
                            />
                            <InputMu 
                                backColor={'#b9bcbf'}
                                color={'primary'}
                                fontColor={'#122b43'}
                                label={'Duração em dias'}
                                id={'duracaoViagemCriar'}
                                onChange={handleDuracaoViagem}
                                type={'number'}
                                value={valorDuracaoViagem}
                            />
                        </InputsContainer>
                        <BotoesContainer>
                            <BotaoVoltar 
                                color={'neutral'}
                            />
                            <BotaoEscuro 
                                color={'neutral'}
                                texto={'Criar'}
                                onClick={CreateTrip}
                            />
                        </BotoesContainer>
                    </FormElementoContainer>
                </FormMainContainer>
            </MainContainer>
        </div>
    )
}

export default CreateTripPage