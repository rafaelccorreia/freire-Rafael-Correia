import React, { useContext, useEffect } from 'react'
import GlobalStateContext from "../../context/context"


const SignUpPage = () => {
    const {setTelaAtual} = useContext(GlobalStateContext)
    
    useEffect(() => {
        setTelaAtual('Sign Up Page')
    }, [setTelaAtual])

    return(
        <div>
            SignUp Page
        </div>
    )
}

export default SignUpPage