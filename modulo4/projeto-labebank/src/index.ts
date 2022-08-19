import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { Conta, Gasto } from "./types"
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
        let nomeUser: string | undefined 
        contas.forEach(user => {
            if(user.CPF === CPF && user.nome === nome) {
                nomeUser = user.nome
                saldoValor = user.saldo
            }
        })

        if(!saldoValor) {
            errorCode = 401
            throw new Error('Nenhum usuário encontrado com essa combinação, verificar nome e CPF')
        }

        res.status(200).send({
            nome: nomeUser,
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

// Criar Conta
app.post('/contas', (req, res) => {
    let errorCode: number = 400
    try {
        const { nome, CPF, dataDeNascimento } = req.body
        let dataRegex = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/)

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

// Adicionar Saldo
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

// Pagar conta
app.put('/contas/pagar', (req,res) => {
    let errorCode: number = 400
    try {
        let dataRegex = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/)
        const { nome, CPF, data, valor} = req.body
        const descricao: string = req.body.descricao

        let dataHoje:Date = new Date()
        let dataHojeFormatada:string = (`${dataHoje.getMonth() + 1}/${dataHoje.getDate()}/${dataHoje.getFullYear()}`)
        let dataEscolhida:string

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
        if (!descricao || !(typeof descricao === "string")) {
            errorCode = 422
            throw new Error('Descricão vazia ou em formato inválido')
        }
        if(data) {
            if (!(typeof data === "string") || !dataRegex.test(data)) {
                errorCode = 422
                throw new Error('Data de pagamento inválida. Esperado uma data no formato: MM/DD/AAAA')
            }
            dataEscolhida = data
        } else {
            dataEscolhida = dataHojeFormatada
        }

        //cria um nova lista de contas para não alterar diretamente os dados
        let valida:boolean = false
        let novaListaContas: Conta[] = contas.map(user => {
            if(nome === user.nome && CPF === user.CPF) {
                valida = true
                // cria um novo extrato para adicionar a lista de extratos da conta
                let novoExtrato: Gasto = {
                    valor: valor,
                    data: dataEscolhida,
                    descricao: descricao
                }
                user.extrato.push(novoExtrato)

                return user
            } else {
                return user
            }
        })

        if(!valida) {
            errorCode = 401
            throw new Error('Nenhum usuário encontrado com essa combinação, verificar nome e CPF')
        }
        res.status(201).send(novaListaContas)
    } 
    catch (error: any) {
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
            case 'Descricão vazia ou em formato inválido':
                res.status(errorCode).send({ message: error.message })
                break
            case 'Data de pagamento inválida. Esperado uma data no formato: MM/DD/AAAA':
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

app.put('/contas/transferencia', (req,res) => {
    let errorCode: number = 400
    try {
        const { nome, CPF, nomeRecebe, CPFRecebe, valor} = req.body

        if (!nome || !(typeof nome === "string")) {
            errorCode = 422
            throw new Error('Nome vazio ou inválido')
        }
        if (!CPF || !(typeof CPF === "string")) {
            errorCode = 422
            throw new Error('CPF vazio ou inválido')
        }
        if (!nomeRecebe || !(typeof nomeRecebe === "string")) {
            errorCode = 422
            throw new Error('Nome do recebedor vazio ou inválido')
        }
        if (!CPFRecebe || !(typeof CPFRecebe === "string")) {
            errorCode = 422
            throw new Error('CPF do recebedor vazio ou inválido')
        }
        if (!valor || !(typeof valor === "number") || valor <= 0) {
            errorCode = 422
            throw new Error('Valor da transferência inválido')
        }

        let valida1: boolean = false
        let valida2: boolean = false
        let novaListaContas: Conta[] = contas.map(conta => {
            if(nome === conta.nome && CPF === conta.CPF){
                valida1 = true
                if(conta.saldo < valor) {
                    errorCode = 422
                    throw new Error('Saldo insuficiente')
                } else {
                    conta.saldo -= valor
                }
                return conta
            } else {
                return conta
            }
        })
        let novaListaContasNovoSaldo: Conta[] = novaListaContas.map(conta => {
            if(nomeRecebe === conta.nome && CPFRecebe === conta.CPF){
                valida2 = true
                conta.saldo += valor
                return conta
            } else {
                return conta
            }
        })

        if(!valida1) {
            errorCode = 422
            throw new Error('Nenhum usuário encontrado com essa combinação, verificar nome e CPF')
        }
        else if(!valida2) {
            errorCode = 422
            throw new Error('Nenhum recebedor encontrado com essa combinação, verificar nomeRecebedor e CPFRecebedor')
        }
        res.status(200).send({
            message: "Tranferência executada com sucesso!",
            novaListaContasNovoSaldo
        })
    }
    catch(error: any) {
        switch(error.message) {
            case 'Nome vazio ou inválido':
                res.status(errorCode).send({ message: error.message })
                break
            case 'CPF vazio ou inválido':
                res.status(errorCode).send({ message: error.message })
                break
            case 'Nome do recebedor vazio ou inválido':
                res.status(errorCode).send({ message: error.message })
                break
            case 'CPF do recebedor vazio ou inválido':
                res.status(errorCode).send({ message: error.message })
                break
            case 'Valor da transferência inválido':
                res.status(errorCode).send({ message: error.message })
                break
            case 'Nenhum usuário encontrado com essa combinação, verificar nome e CPF':
                res.status(errorCode).send({ message: error.message })
                break
            case 'Nenhum recebedor encontrado com essa combinação, verificar nomeRecebedor e CPFRecebedor':
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