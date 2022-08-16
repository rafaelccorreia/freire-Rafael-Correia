import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'

const app = express()
app.use(express.json())
app.use(cors())

//exercicio 1
app.get('/ping', (req, res) => {
    res.send('Pong! 🏓')
})

//exercicio 2
type Afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//exercicio 3
const listaAfazeres: Afazeres[] = [
    {
        userId: 1,
        id: 1,
        title: 'Resolução do exercício 3',
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: 'Resolução do exercício 4',
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: 'Resolução do exercício 5',
        completed: false
    },
    {
        userId: 1,
        id: 4,
        title: 'Resolução do exercício 6',
        completed: false
    },
    {
        userId: 1,
        id: 5,
        title: 'Resolução do exercício 7',
        completed: false
    },
    {
        userId: 1,
        id: 6,
        title: 'Resolução do exercício 8',
        completed: false
    },
    {
        userId: 1,
        id: 7,
        title: 'Resolução do exercício 9',
        completed: false
    },
    {
        userId: 1,
        id: 8,
        title: 'Resolução do exercício 10',
        completed: false
    },
    {
        userId: 1,
        id: 9,
        title: 'Resolução do exercício 11',
        completed: false
    },
]

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})