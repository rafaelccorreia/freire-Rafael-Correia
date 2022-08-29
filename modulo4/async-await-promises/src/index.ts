import knex from "knex"
import dotenv from "dotenv"
import express, { response } from "express"
import { AddressInfo } from "net"
import axios from "axios"
import { StringMappingType } from "typescript"

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
const getAssinantesArrow = async (): Promise<user[]> => {
    const result = await axios.get(`https://labenews.herokuapp.com/subscribers`)

    return result.data.map((res: any) => {
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

// Exercício 4
// a) void pois não retorna nada
// b)
const createNoticia = async (title: string, content: string, date: number): Promise<void> => {
    const body = {
        title: title,
        content: content,
        date: date
    }
    const req = await axios.put('https://labenews.herokuapp.com/news', body)
}

// Exercício 5
const sendNotificacoes = async (users: user[], message: string): Promise<void> => {
    users.forEach(async (user) => {
        const body = {
            subscriberId: user.id,
            message: message
        }
        const req = await axios.post('https://labenews.herokuapp.com/notifications', body)
    })
    return
}

// Exercício 6
// a) Execulta todas as promises contidas na array
// b) É possível fazer todos de uma vez, se der um erro em alguma delas, todo o processo para
// c)
const sendNotifications = async (
    users: user[],
    message: string
): Promise<void> => {
    try {
        const promises = users.map(user => {
            return axios.post(`https://labenews.herokuapp.com/notifications
            `, {
                subscriberId: user.id,
                message: message,
            })
        })

        await Promise.all(promises);

    } catch {
        console.log("Error");
    }
}

// Desafio
const arrowGreeting = async(): Promise<void> => {
    setTimeout(() => {
        console.log("Oi")
    }, 5000)
}

arrowGreeting()

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})