import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { goToListaDeViagens, goToLogin, goToAdminHomePage } from "../routes/coordinator"
import BotaoEscuro from "../components/BotaoEscuro"

const HomeMainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
`

const BotoesContainer = styled.div`
    display: flex;
`

const LeftSideButtonContainer = styled.div`
    &:hover {
        background-color: rgba(18, 43, 67, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        height: 100vh;
        position: fixed;
        transition: 0.7s;
        top: 0;
        width: 50%;
    }
`
const RightSideButtonContainer = styled.div`
    &:hover {
        background-color: rgba(185, 188, 191, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        right: 0;
        height: 100vh;
        position: fixed;
        transition: 0.7s;
        top: 0;
        width: 50%;
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
            <h1>LabeXCosmos</h1>
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
        </HomeMainContainer>
    )
}

export default HomePage