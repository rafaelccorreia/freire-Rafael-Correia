import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { goToHome } from '../routes/coordinator'
import logoImg from '../img/logo_header_icon.png'

const HeaderContainer = styled.header` 
    font-family: 'Codystar', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    background-color: #122b43;
    box-shadow: 1px 1px 8px #b9bcbf;
`

const LogoContainer = styled.div` 
    margin-left: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    padding: 1rem;
    border-radius: 10px;
    &:hover, &:focus, &:active {
        box-shadow: 1px 1px 8px #b9bcbf;
        cursor: pointer;
        background-color: #1D456B;
    }
`

const LogoNome = styled.h2` 
    margin-right: 0.5rem;
`

const Header = () => {
    const navigate = useNavigate()

    return (
        <HeaderContainer>
            <LogoContainer onClick={() => goToHome(navigate)}>
                <LogoNome>LabeXCosmos</LogoNome>
                <img src={logoImg}/>
            </LogoContainer>
        </HeaderContainer>
    )
}

export default Header