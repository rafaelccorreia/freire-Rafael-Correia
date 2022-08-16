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

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})