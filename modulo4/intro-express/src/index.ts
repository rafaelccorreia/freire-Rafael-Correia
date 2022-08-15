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
    phone: string,
    email: string,
    website: string
}

//exercício 3
const UsersList: User[] = [
    {
        id: "1",
        name: "Aatrox",
        phone: "87989-8989",
        email: "aaMegaDarkin@gmail.com",
        website: "despair.blog.com"
    },
    {
        id: "2",
        name: "Alistar",
        phone: "00009-8989",
        email: "chifrada@gmail.com",
        website: "mino.blog.com"
    },
    {
        id: "3",
        name: "Carlos",
        phone: "16855-4656",
        email: "johnson@gmail.com",
        website: "grove.street.com"
    },
    {
        id: "4",
        name: "Homelander",
        phone: "12345-7595",
        email: "youretherealhero@gmail.com",
        website: "seven.the.com"
    },
    {
        id: "5",
        name: "French",
        phone: "22323-1111",
        email: "moncouer@gmail.com",
        website: "moncouer.com"
    },
]