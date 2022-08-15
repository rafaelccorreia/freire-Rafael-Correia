import express from "express"
import cors from 'cors'
import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})

//exercício 1
app.get("/", (req, res) => {
    res.send("Hello from Express")
})

//exercício 2
type User = {
    id: string,
    name: string,
    phone: string | number,
    email: string,
    website: string
}