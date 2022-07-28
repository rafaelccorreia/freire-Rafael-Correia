import React from 'react'

import useForm from '../../hooks/useForm'
import InputForm from '../../components/InputForm/InputForm'
import { InputsContainerSignUp, TermsContainer, TermsSpan } from './styled'
import { RoundButtonFilled } from '../../components/BotaoGradient/BotaoGradient'

const SignUpForm = () => {
    const [dados, onChange, clear] = useForm({name: '', email: '', password: ''})

    const handleSubmitForm = (event) => {
        event.preventDefault()
        console.log(dados)
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <InputsContainerSignUp>
                <InputForm 
                    name={'name'}
                    onChange={onChange}
                    placeHolder={'Nome de usuário'}
                    type={'text'}
                    value={dados.name}
                />
                <InputForm 
                    name={'email'}
                    onChange={onChange}
                    placeHolder={'E-mail'}
                    type={'email'}
                    value={dados.email}
                />
                <InputForm 
                    name={'password'}
                    onChange={onChange}
                    placeHolder={'Senha'}
                    type={'password'}
                    value={dados.password}
                />
            </InputsContainerSignUp>
            <TermsContainer>
                <p>Ao continuar, você concorda com o nosso <TermsSpan>Contrato de usuário</TermsSpan> e nossa <TermsSpan>Política de Privacidade</TermsSpan></p>
                <input type="checkbox" id="concordarEmails" name="concordarEmails" value="concordarEmails" />
                <label htmlFor="concordarEmails">Eu concordo em receber emails sobre coisas legais no Labeddit</label>
            </TermsContainer>
            <RoundButtonFilled 
                text={'Cadastrar'}
                type={'submit'}
                value={'Submit'}
            />
        </form>
    )
}

export default SignUpForm