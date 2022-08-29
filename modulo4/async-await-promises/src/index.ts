import knex from "knex"
import dotenv from "dotenv"
import express, { response } from "express"
import { AddressInfo } from "net"
import axios from "axios"

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
})

const app = express()
app.use(express.json())

// Exercício 1
// a) /subscribers
// b) any[]
// c)
async function getAssinantes(): Promise<any[]> {
    const result = await axios.get(`https://labenews.herokuapp.com/subscribers`)
    console.log(result)
    return result.data
}

// Exercício 2
// a) A arrow function precisa ser declarada com const/let e o async vem após o nome da função dentro da declaração
// b)
const getAssinantesArrow = async ():Promise<user[]> => {
    const result = await axios.get(`https://labenews.herokuapp.com/subscribers`)

    return result.data.map((res:any) => {
        return {
            id: res.id,
            email: res.email,
            name: res.name,
        }
    })
}
getAssinantesArrow()

// Exercício 3
// a) não
// b) para termos certeza que estamos recebendo o valor correto
// c) 
type user = {
    id: string,
    name: string,
    email: string
}

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})