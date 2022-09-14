import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import getUser from './endpoints/getUser'
import createUser from './endpoints/createUser'
import editUser from './endpoints/EditUser'
import createTask from './endpoints/createTask'
import getTask from './endpoints/getTask'
import getAllUsers from './endpoints/getAllUsers'
import getTasksFromUser from './endpoints/getTasksFromUser'
import searchUser from './endpoints/searchUser'
import linkUserToTask from './endpoints/linkUserToTask'
import getAllUsersResponsibleTask from './endpoints/getAllUsersResponsibleTask'

const app: Express = express()

app.use(express.json())
app.use(cors())

//user
app.get('/user/all', getAllUsers)
app.get('/user/:id', getUser)
app.get('/user', searchUser)
app.put('/user', createUser)
app.put('/user/edit/:id', editUser)
//task
app.get('/task', getTasksFromUser)
app.get('/task/:id', getTask)
app.get('/task/:id/responsible', getAllUsersResponsibleTask)
app.post('/task', createTask)
app.post('/task/responsible', linkUserToTask)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})