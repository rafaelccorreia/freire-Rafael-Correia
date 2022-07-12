import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BotaoVoltar from "../components/BotaoVoltar"
import { goToAdminHomePage } from "../routes/coordinator"

const LoginPage = () => {
    const navigate = useNavigate()
    const [valorNomeAdmin, setValorNomeAdmin] = useState('')
    const [valorEmailAdmin, setValorEmailAdmin] = useState('')

    const handleNomeAdmin = (event) => {
        setValorNomeAdmin(event.target.value)
    }

    const handleEmailAdmin = (event) => {
        setValorEmailAdmin(event.target.value)
    }

    const handleLogin = () => {
        //criar uma condição com a requisição da api para saber se o login foi feito
        goToAdminHomePage(navigate)
    }

    return (
        <div>
            <p>Login Page</p>
            <input value={valorNomeAdmin} onChange={handleNomeAdmin} />
            <input value={valorEmailAdmin} onChange={handleEmailAdmin} />
            <BotaoVoltar />
            <button onClick={handleLogin}>Entrar</button>
        </div>
    )
}

export default LoginPage