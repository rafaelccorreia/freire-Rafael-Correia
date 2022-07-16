import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import BotaoVoltar from '../components/BotaoVoltar'
import BotaoEscuro from '../components/BotaoEscuro'
import MainContainer from '../components/MainContainer'
import TituloDaTela from '../components/TituloDaTela'
import { SelectTrip, SelectCountry } from '../components/SelectMu'
import InputMu from '../components/InputMu'
import Header from '../components/Header'

const FormPublicContainer = styled.div` 
    background-color: rgba(185, 188, 191, 0.8);
    min-width: 75%;
    min-height: 80vh;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FormElementoContainer = styled.form` 
    min-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #122b43;
    border-radius: 10px;
    padding: 1rem;
`

const InputsContainer = styled.div`
    margin: 1rem;
    min-width: 100%;
    max-width: 800px;
`

const BotoesContainer = styled.div` 
    display: flex;
    justify-content: space-around;
    min-width: 60%;
    margin: 1rem;
`

const ApplicationFormPage = () => {
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
    useEffect(() => {
        GetTrips()
    }, [])

    const [valorSelectViagem, setValorSelectViagem] = useState('')
    const [valorSelectViagemId, setValorSelectViagemId] = useState('')
    const [valorSelectCountry, setValorSelectCountry] = useState('')
    const [valorInputNome, setValorInputNome] = useState('')
    const [valorInputIdade, setValorInputIdade] = useState('')
    const [valorInputTexto, setValorInputTexto] = useState('')
    const [valorInputProfissao, setValorInputProfissao] = useState('')

    //controladores de input
    const handleSelectViagem = (event) => {
        setValorSelectViagem(event.target.value)
        console.log(event.target)
        listaViagens.map(viagem => {
            if(viagem.name === event.target.value) {
                setValorSelectViagemId(viagem.id)
            }
        })
    }
    const handleSelectCountry = (event) => {
        setValorSelectCountry(event.target.value)
    }
    const handleInputNome = (event) => {
        setValorInputNome(event.target.value)
    }
    const handleInputIdade = (event) => {
        setValorInputIdade(event.target.value)
    }
    const handleInputTexto = (event) => {
        setValorInputTexto(event.target.value)
    }
    const handleInputProfissao = (event) => {
        setValorInputProfissao(event.target.value)
    }

    const ApplyToTrip = (event) => {
        const body = {
            name: valorInputNome,
            age: valorInputIdade,
            applicationText: valorInputTexto,
            profession: valorInputProfissao,
            country: valorSelectCountry
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-correia-freire/trips/${valorSelectViagemId}/apply`, body)
        .then(resp => {
            alert('Sua inscrição foi feita com sucesso!')
            setValorInputIdade('')
            setValorInputNome('')
            setValorInputProfissao('')
            setValorInputTexto('')
            setValorSelectCountry('')
            setValorSelectViagem('')
            setValorSelectViagemId('')
        })
        .catch(err => {
            alert(JSON.parse(err.request.responseText).message)
        })
    }

    return (
        <div>
            <Header />
            <MainContainer>
                <FormPublicContainer>
                    <TituloDaTela
                        titulo={'Formulário de Inscrição'}
                        color={'#121243'}
                    />
                    <FormElementoContainer>
                        <InputsContainer>
                            <SelectTrip 
                                value={valorSelectViagem}
                                onChange={handleSelectViagem}
                                id={valorSelectViagemId}
                            />
                            <InputMu 
                                backColor={'#b9bcbf'}
                                color={'primary'}
                                fontColor={'#122b43'}
                                label={'Nome'}
                                id={'NomeViagemAplicar'}
                                onChange={handleInputNome}
                                type={'text'}
                                value={valorInputNome}
                            />
                            <InputMu 
                                backColor={'#b9bcbf'}
                                color={'primary'}
                                fontColor={'#122b43'}
                                label={'Idade'}
                                id={'NomeViagemAplicar'}
                                onChange={handleInputIdade}
                                type={'number'}
                                value={valorInputIdade}
                            />
                            <InputMu 
                                backColor={'#b9bcbf'}
                                color={'primary'}
                                fontColor={'#122b43'}
                                label={'Texto de candidatura'}
                                id={'NomeViagemAplicar'}
                                onChange={handleInputTexto}
                                type={'text'}
                                value={valorInputTexto}
                            />
                            <InputMu 
                                backColor={'#b9bcbf'}
                                color={'primary'}
                                fontColor={'#122b43'}
                                label={'Profissão'}
                                id={'NomeViagemAplicar'}
                                onChange={handleInputProfissao}
                                type={'text'}
                                value={valorInputProfissao}
                            />
                            <SelectCountry 
                                value={valorSelectCountry}
                                onChange={handleSelectCountry}
                            />
                        </InputsContainer>
                    </FormElementoContainer>
                    <BotoesContainer>
                        <BotaoVoltar 
                            color={'primary'}
                        />
                        <BotaoEscuro
                            onClick={ApplyToTrip}
                            texto={'Enviar'}
                            color={'primary'}
                        />
                    </BotoesContainer>
                </FormPublicContainer>
            </MainContainer>
        </div>
    )
}

export default ApplicationFormPage