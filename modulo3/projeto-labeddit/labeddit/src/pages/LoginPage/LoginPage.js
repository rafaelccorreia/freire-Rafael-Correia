import React, { useContext, useEffect, useState } from 'react'

import GlobalStateContext from "../../context/context"
import logoLabEddit from '../../assets/logo.png'
import InputForm from '../../components/InputForm/InputForm'
import { MainContainer, LogoContainer, LogoImg, LogoMensagem, InputsContainer } from './styled'

const LoginPage = () => {
    const {setTelaAtual} = useContext(GlobalStateContext)
    
    useEffect(() => {
        setTelaAtual('Login Page')
    }, [setTelaAtual])

    const [valorNome, setValorNome] = useState('')
    const [valorSenha, setValorSenha] = useState('')

    const handleValorNome = (event) => {
        setValorNome(event.target.value)
    }
    const handleValorSenha = (event) => {
        setValorSenha(event.target.value)
    }

    return (
        <MainContainer>
            <LogoContainer>
                <LogoImg src={logoLabEddit} alt='logo'/>
                <LogoMensagem>O projeto de rede social da Labenu</LogoMensagem>
            </LogoContainer>
            <InputsContainer>
                <InputForm 
                    onChange={handleValorNome}
                    placeHolder={'Nome'}
                    type={'text'}
                    value={valorNome}
                />
                <InputForm 
                    onChange={handleValorSenha}
                    placeHolder={'Senha'}
                    type={'password'}
                    value={valorSenha}
                />
            </InputsContainer>
        </MainContainer>
    )
}

export default LoginPage