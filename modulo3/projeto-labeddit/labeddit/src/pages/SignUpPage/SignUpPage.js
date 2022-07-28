import React from 'react'

import useTela from '../../hooks/useTela'
import SignUpForm from './SignUpForm'
import { MainContainer, TitleSignUpPage } from './styled'

const SignUpPage = () => {
    useTela('Sign Up Page')

    return(
        <MainContainer>
            <TitleSignUpPage>Olá, boas vindas ao LabEddit ;)</TitleSignUpPage>
            <SignUpForm />
        </MainContainer>
    )
}

export default SignUpPage