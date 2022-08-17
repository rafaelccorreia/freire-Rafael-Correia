import express from "express"
import cors from 'cors'
import { AddressInfo } from "net"

import { Produto, listaProdutos } from "./data"

const app = express()
app.use(cors())
app.use(express.json())

//exercicio1
app.get('/test', (req, res) => {
    res.send('A API está funcionando!')
})

//exercicio3
app.post('/products/create', (req, res) => {
    try {
        const name: string = req.body.name
        const price: number = req.body.price

        if (!name && !price) {
            throw new Error('Verifique os dados, esperava receber name e price')
        }

        if (!name || !(typeof name === "string")) {
            throw new Error('Nome vazio ou inválido')
        }
        if (!price || !(typeof price === "number") || price <= 0) {
            throw new Error("Preço vazio ou inválido (number é esperado)")
        }

        let newProduct: Produto = {
            id: Date.now().toString(),
            name: name,
            price: price
        }
        let newListaProdutos: Produto[] = [...listaProdutos, newProduct]

        res.send(newListaProdutos)
    } catch (error: any) {
        switch (error.message) {
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

//exercicio 4
app.get('/products', (req, res) => {
    try {
        res.send(listaProdutos)
    } catch (error) {
        res.status(500).send('Erro inesperado!')
    }
})

//exercicio 5
app.put('/products/:idProduct', (req, res) => {
    try {
        const produtoId: string = req.params.idProduct
        const novoPreco: number = req.body.novoPreco
        const novoNome: string = req.body.nonoNome
        let verificaId: boolean = false

        if (!novoPreco && !novoNome) {
            throw new Error('Nenhum novo valor foi recebido')
        }
        if (novoPreco && !(typeof novoPreco === "number")) {
            throw new Error('Valor do preço inválido, number é esperado')
        }
        if (novoNome && !(typeof novoNome === "string")) {
            throw new Error('Valor do nome inválido, string é esperado')
        }
        if (novoPreco <= 0) {
            throw new Error('Valor inválido, o preço deve ser maior que 0')
        }

        let novaListaProdutos: Produto[] = listaProdutos.map(produto => {
            if (produtoId === produto.id) {
                verificaId = true
                
                if(novoNome && novoPreco){
                    produto.name = novoNome
                    produto.price = novoPreco
                } else if(novoNome) {
                    produto.name = novoNome
                } else if(novoPreco) {
                    produto.price = novoPreco
                }

                return produto
            } else {
                return produto
            }
        })

        if (!verificaId) {
            throw new Error('Produto não encontrado')
        }
        res.send(novaListaProdutos)

    } catch (error: any) {
        switch(error.message) {
            case 'Nenhum novo valor foi recebido':
                res.status(404).send(error.message)
                break

            case 'Valor do preço inválido, number é esperado':
                res.status(406).send(error.message)
                break

            case 'Valor do nome inválido, string é esperado':
                res.status(406).send(error.message)
                break

            case 'Valor inválido, o preço deve ser maior que 0':
                res.status(406).send(error.message)
                break

            case 'Produto não encontrado':
                res.status(404).send(error.message)
                break

            default:
                res.status(500).send('Algo inesperado aconteceu!')
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