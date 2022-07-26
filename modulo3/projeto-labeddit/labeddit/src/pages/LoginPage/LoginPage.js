import React, { useContext, useEffect } from 'react'
import GlobalStateContext from "../../context/context"


const LoginPage = () => {
    const {setTelaAtual} = useContext(GlobalStateContext)
    
    useEffect(() => {
        setTelaAtual('Login Page')
    }, [setTelaAtual])

    return (
        <div>
            Login Page
        </div>
    )
}

export default LoginPage