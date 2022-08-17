import express from "express"
import cors from 'cors'
import { AddressInfo } from "net"

import { Produto, listaProdutos } from "./data"

const app = express()
app.use(cors())
app.use(express.json())

//exercicio1
app.get('/test', (req,res) => {
    res.send('A API está funcionando!')
})

//exercicio3
app.post('/products/create', (req, res) => {
    try {
        const name:string = req.body.name
        const price:number = req.body.price

        if(!name && !price) {
            throw new Error('Verifique os dados, esperava receber name e price')
        }

        if(!name || !(typeof name === "string")) {
            throw new Error('Nome vazio ou inválido')
        }
        if(!price || !(typeof price === "number") || price <= 0) {
            throw new Error("Preço vazio ou inválido (number é esperado)")
        }

        let newProduct: Produto = {
            id: Date.now().toString(),
            name: name,
            price: price
        }
        let newListaProdutos: Produto[] = [...listaProdutos, newProduct]

        res.send(newListaProdutos)
    } catch(error: any) {
        switch(error.message){
            case 'Verifique os dados, esperava receber name e price':
                res.status(404).send(error.message)
                break
            case 'Nome vazio ou inválido':
                res.status(404).send(error.message)
                break

            case "Preço vazio ou inválido (number é esperado)":
                res.status(404).send(error.message)
                break

            default:
                res.status(500).send("Erro inesperado!")
                break
        }
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})