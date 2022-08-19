import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { Conta } from "./types"
import { contas } from "./data/data"

const app = express()
app.use(express.json())
app.use(cors())

// Pegar Saldo
app.get('/contas', (req, res) => {
    let errorCode: number = 400
    try {
        const {nome, CPF} = req.body

        if (!nome || !(typeof nome === "string")) {
            errorCode = 422
            throw new Error('Nome vazio ou inválido')
        }
        if (!CPF || !(typeof CPF === "string")) {
            errorCode = 422
            throw new Error('CPF vazio ou inválido')
        }

        //cria um nova lista de contas para não alterar diretamente os dados
        let saldoValor: number | undefined 
        contas.forEach(user => {
            if(user.CPF === CPF) {
                saldoValor = user.saldo
            }
        })

        if(!saldoValor) {
            errorCode = 401
            throw new Error('Nenhum usuário encontrado com essa combinação, verificar nome e CPF')
        }

        res.status(200).send({
            nome: nome,
            saldo: saldoValor
        })

    } catch (error: any) {

        switch(error.message) {
            case 'Nome vazio ou inválido':
                res.status(errorCode).send({ message: error.message })
                break
            case 'CPF vazio ou inválido':
                res.status(errorCode).send({ message: error.message })
                break
            case 'Nenhum usuário encontrado com essa combinação, verificar nome e CPF':
                res.status(errorCode).send({ message: error.message })
                break
            default:
                res.status(500).send({ message: 'Ocorreu um erro inesperado!'})
                break
        }
    }
})

//Criar Conta
app.post('/contas', (req, res) => {
    let errorCode: number = 400
    try {
        const { nome, CPF, dataDeNascimento } = req.body
        var dataRegex = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/)

        //validação de dados
        if (!nome || !(typeof nome === "string")) {
            errorCode = 422
            throw new Error('Nome vazio ou inválido')
        }
        if (!CPF || !(typeof CPF === "string")) {
            errorCode = 422
            throw new Error('CPF vazio ou inválido')
        }
        contas.forEach(conta => {
            if(conta.CPF === CPF) {
                throw new Error('CPF já cadastrado')
            }
        })
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
            case 'CPF já cadastrado':
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

//Adicionar Saldo
app.put('/contas', (req, res) => {
    let errorCode: number = 400
    try {
        const { nome, CPF, valor} = req.body

        if (!nome || !(typeof nome === "string")) {
            errorCode = 422
            throw new Error('Nome vazio ou inválido')
        }
        if (!CPF || !(typeof CPF === "string")) {
            errorCode = 422
            throw new Error('CPF vazio ou inválido')
        }
        if (!valor || !(typeof valor === "number") || valor <= 0) {
            errorCode = 422
            throw new Error('Valor do depósito inválido')
        }

        //cria um nova lista de contas para não alterar diretamente os dados
        let valida:boolean = false
        let novaListaContas: Conta[] = contas.map(user => {
            if(nome === user.nome && CPF === user.CPF) {
                valida = true
                user.saldo += valor
                return user
            } else {
                return user
            }
        })

        if(!valida) {
            errorCode = 401
            throw new Error('Nenhum usuário encontrado com essa combinação, verificar nome e CPF')
        }

        res.status(200).send(novaListaContas)

    } catch (error: any) {

        switch(error.message) {
            case 'Nome vazio ou inválido':
                res.status(errorCode).send({ message: error.message })
                break
            case 'CPF vazio ou inválido':
                res.status(errorCode).send({ message: error.message })
                break
            case 'Valor do depósito inválido':
                res.status(errorCode).send({ message: error.message })
                break
            case 'Nenhum usuário encontrado com essa combinação, verificar nome e CPF':
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