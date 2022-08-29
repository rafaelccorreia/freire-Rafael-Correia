import knex from "knex"
import dotenv from "dotenv"
import express from "express"
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
getAssinantes()

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})