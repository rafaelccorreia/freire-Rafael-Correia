import React, { useState } from 'react'

import useTela from '../../hooks/useTela'
import logoLabEddit from '../../assets/logo.png'
import InputForm from '../../components/InputForm/InputForm'
import { RoundButtonFilled, RoundButtonNoFill } from '../../components/BotaoGradient/BotaoGradient'
import { MainContainer, LogoContainer, LogoImg, LogoMensagem, InputsContainer, LinhaGradient } from './styled'

const LoginPage = () => {
    useTela('Login Page')
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
                <LogoImg src={logoLabEddit} alt='logo' />
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
            <div>
                <RoundButtonFilled
                    text={'Continuar'}
                    type={'button'}
                />
                <LinhaGradient />
                <RoundButtonNoFill
                    text={'Criar uma conta!'}
                    type={'button'}
                />
            </div>
        </MainContainer>
    )
}

export default LoginPage