import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import getUser from './endpoints/getUser'
import createUser from './endpoints/createUser'
import editUser from './endpoints/EditUser'
import createTask from './endpoints/createTask'
import getTask from './endpoints/getTask'

const app: Express = express()

app.use(express.json())
app.use(cors())

//user
app.get('/user/:id', getUser)
app.put('/user', createUser)
app.put('/user/edit/:id', editUser)
//task
app.post('/task', createTask)
app.get('/task/:id', getTask)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})