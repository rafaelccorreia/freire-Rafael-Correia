import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

import { goToAdminHomePage } from "../routes/coordinator"
import BotaoVoltar from "../components/BotaoVoltar"
import BotaoEscuro from "../components/BotaoEscuro"
import TituloDaTela from "../components/TituloDaTela"
import InputMu from "../components/InputMu"

const MainContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
`

const LoginContainer = styled.div`
    align-items: center;
    background-color: rgba(18, 43, 67, 0.8);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 40rem;
    justify-content: center;
    min-width: 70%;
`

const InputsContainer = styled.div`
    margin: 1rem;
    min-width: 75%;
`

const BotoesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

const LoginPage = () => {
    const navigate = useNavigate()
    const [valorEmailAdmin, setValorEmailAdmin] = useState('')
    const [valorPassAdmin, setValorPassAdmin] = useState('')

    const handleEmailAdmin = (event) => {
        setValorEmailAdmin(event.target.value)
    }

    const handlePassAdmin = (event) => {
        setValorPassAdmin(event.target.value)
    }

    const handleLogin = () => {
        const body = {
            email: valorEmailAdmin,
            password: valorPassAdmin
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-correia-freire/login', body)
        .then(resp => {
            console.log(resp.data.token)
            localStorage.setItem('token', resp.data.token )
            goToAdminHomePage(navigate)
        })
        .catch(err => {
            alert(JSON.parse(err.request.responseText).message)
        })
    }

    return (
        <MainContainer>
            <LoginContainer>
                <TituloDaTela 
                    titulo={'Admin Login'}
                    color={'#b9bcbf'}
                />
                <InputsContainer>
                    <InputMu 
                        backColor={'#b9bcbf'}
                        color={'primary'}
                        fontColor={'#122b43'}
                        label={'E-mail'}
                        id={'emailLogin'}
                        onChange={handleEmailAdmin}
                        type={'text'}
                        value={valorEmailAdmin}
                    />
                    <InputMu 
                        backColor={'#b9bcbf'}
                        color={'primary'}
                        fontColor={'#122b43'}
                        label={'Password'}
                        id={'Password'}
                        onChange={handlePassAdmin} 
                        type={'password'}
                        value={valorPassAdmin} 
                    />
                </InputsContainer>
                <BotoesContainer>    
                    <BotaoVoltar color={'neutral'}/>
                    <BotaoEscuro 
                        color={'neutral'}
                        onClick={handleLogin}
                        texto={'Entrar'}
                    />
                </BotoesContainer>
            </LoginContainer>
        </MainContainer>
    )
}

export default LoginPage