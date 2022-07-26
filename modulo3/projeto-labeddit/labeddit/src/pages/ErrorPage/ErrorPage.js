import React, { useContext, useEffect } from 'react'
import GlobalStateContext from "../../context/context"


const ErrorPage = () => {
    const {setTelaAtual} = useContext(GlobalStateContext)

    useEffect(() => {
        setTelaAtual('Error Page')
    }, [setTelaAtual])

    return (
        <div>
            ERROOOOOOOOOOOOOR
        </div>
    )
}

export default ErrorPage