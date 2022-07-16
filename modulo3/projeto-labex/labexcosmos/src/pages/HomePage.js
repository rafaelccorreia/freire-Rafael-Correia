import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import { goToListaDeViagens, goToLogin, goToAdminHomePage } from "../routes/coordinator"
import BotaoEscuro from "../components/BotaoEscuro"
import admBg from '../img/adm_bg.png'
import tripsBg from '../img/trips_bg.png'
import logoImg from '../img/logo_header_icon.png'

const HomeMainContainer = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
    text-align: center;
`

const TituloPrincipal = styled.h1` 
    font-size: 4rem;
    margin-bottom: 10rem;
    text-align: center;
    font-family: 'Codystar', cursive;
    display: flex;
    align-items: center;
    @media screen and (max-width: 480px) {
        font-size: 3rem;
        flex-direction: column;
    }
`

const TituloPrincipalImg = styled.img` 
    height: 5rem;
    width: 5rem;
    margin-left: 0.5rem;
    @media screen and (max-width: 480px) {
        margin: 0.5rem 0 2rem 0;
    }
`

const BotoesContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`

const Footer = styled.footer` 
    position: fixed;
    bottom: 3%;
    font-size: 1.2rem;
    padding: 1rem;
    background-color: rgba(18, 43, 67, 0.8);
    border-radius: 10px;
`

const LeftSideButtonContainer = styled.div`
    position: fixed;
    left: 0;
    top: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    padding: 0 1rem;
    &:hover, &:focus {
        top: 0;
        height: 100vh;
        justify-content: center;
        background-color: rgba(18, 43, 67, 0.8);
        background-image: url(${admBg});
        background-size: cover;
        transition: 1s;
        border-radius: 10px;
    }
    @media screen and (max-width: 480px) {
        &:focus, &:active, &:hover {
            top: 0;
            height: 100vh;
            justify-content: center;
            background-color: rgba(18, 43, 67, 0.8);
            background-image: url(${admBg});
            background-size: contain;
            transition: 1s;
            border-radius: 10px;
        }
    }
`
const RightSideButtonContainer = styled.div`
    position: fixed;
    right: 0;
    bottom: calc(50% - 2.281rem);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    padding: 0 1rem;
    &:hover, &:focus {
        bottom: 0;
        height: 100vh;
        justify-content: center;
        background-color: rgba(185, 188, 191, 0.8);
        background-image: url(${tripsBg});
        background-size: cover;
        transition: 1s;
        border-radius: 10px;
    }
    @media screen and (max-width: 480px) {
        &:focus, &:active, &:hover {
            bottom: 0;
            height: 100vh;
            justify-content: center;
            background-color: rgba(185, 188, 191, 0.8);
            background-image: url(${tripsBg});
            background-size: contain;
            transition: 1s;
            border-radius: 10px;
        }
    }
`

const HomePage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
    }, [isLoggedIn])

    const handleAdminArea = (isLoggedIn) => {
        if(isLoggedIn === false) {
            goToLogin(navigate)
        } else {
            goToAdminHomePage(navigate)
        }
    }

    return (
        <HomeMainContainer>
            <TituloPrincipal>LabeXCosmos <TituloPrincipalImg src={logoImg} /></TituloPrincipal>
            <BotoesContainer>
                <LeftSideButtonContainer>
                    <BotaoEscuro 
                        onClick={() => handleAdminArea(isLoggedIn)}
                        texto={'Área de Admin'}
                        color={'neutral'}
                    />
                </LeftSideButtonContainer>
                <RightSideButtonContainer>
                    <BotaoEscuro 
                        onClick={() => goToListaDeViagens(navigate)}
                        texto={'Ver Viagens'}
                        color={'primary'}
                    />
                </RightSideButtonContainer>
            </BotoesContainer>
            <Footer>Rafael Chagas &copy; 2022</Footer>
        </HomeMainContainer>
    )
}

export default HomePage