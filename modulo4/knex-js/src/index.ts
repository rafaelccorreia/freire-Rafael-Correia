import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import knex from 'knex'
import dotenv from "dotenv"

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
})

const app: Express = express()

app.use(express.json())
app.use(cors())

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0][0]
}
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result[0][0]
}

// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorByName("Tony Ramos")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
    // o valor no resultado!
    const count = result[0][0].count;
    return count;
};

// Assim a chamada funciona fora dos endpoints com await
(async () => {
    console.log(await getActorByName("Tony Ramos"))
})()


// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:name", async (req, res) => {
    try {
        const name = req.params.name

        console.log(await getActorByName(name))

        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})