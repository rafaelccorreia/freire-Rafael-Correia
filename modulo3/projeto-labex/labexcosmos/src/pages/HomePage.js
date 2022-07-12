import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToListaDeViagens, goToLogin, goToAdminHomePage } from "../routes/coordinator"

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
        <div>
            <p>Home Page</p>
            <button onClick={() => handleAdminArea(isLoggedIn)}>Área de Admin</button>
            <button onClick={() => goToListaDeViagens(navigate)}>Ver Viagens</button>
        </div>
        
    )
}

export default HomePage