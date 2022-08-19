import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { Conta } from "./types"
import { contas } from "./data/data"

const app = express()
app.use(express.json())
app.use(cors())

app.post('/contas', (req, res) => {
    let errorCode: number = 400
    try {
        const { nome, CPF, dataDeNascimento } = req.body
        var dataRegex = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/)

        if (!nome || !(typeof nome === "string")) {
            errorCode = 422
            throw new Error('Nome vazio ou inválido')
        }
        if (!CPF || !(typeof CPF === "string")) {
            errorCode = 422
            throw new Error('CPF vazio ou inválido')
        }
        if (!dataDeNascimento || !(typeof dataDeNascimento === "string") || !dataRegex.test(dataDeNascimento)) {
            errorCode = 422
            throw new Error('Data de nascimento vazia ou inválida. Esperado uma data no formato: MM/DD/AAAA')
        }

        const dataNascimentoConvertida: Date = new Date(dataDeNascimento)
        const dataAtual: Date = new Date()
        let idadeUsuarioMili = Math.abs(dataAtual.getTime() - dataNascimentoConvertida.getTime())
        let idadeUsuario = Math.ceil(idadeUsuarioMili / (1000 * 60 * 60 * 24 * 30.5 * 12))
        if (idadeUsuario < 18) {
            errorCode = 406
            throw new Error('Usuário menor de idade, apenas pessoas com mais de 18 anos podem criar contas.')
        }

        let novaListaContas: Conta[] = contas

        const novaConta: Conta = {
            nome: nome,
            CPF: CPF,
            dataDeNascimento: dataDeNascimento,
            saldo: 0,
            extrato: []
        }
        novaListaContas.push(novaConta)

        res.status(201).send(novaListaContas)
    } catch (error: any) {

        switch(error.message) {
            case 'Nome vazio ou inválido':
                res.status(errorCode).send({ message: error.message })
                break
            case 'CPF vazio ou inválido':
                res.status(errorCode).send({ message: error.message })
                break
            case 'Data de nascimento vazia ou inválida. Esperado uma data no formato: MM/DD/AAAA':
                res.status(errorCode).send({ message: error.message })
                break
            case 'Usuário menor de idade, apenas pessoas com mais de 18 anos podem criar contas.':
                res.status(errorCode).send({ message: error.message })
                break
            default:
                res.status(500).send({ message: 'Ocorreu um erro inesperado!'})
                break
        }
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})