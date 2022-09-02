import { AddressInfo } from "net"

import { app } from "./app"
import { createUser } from "./endpoints/createUser"
import { getAllUsers } from "./endpoints/getAllUsers"

app.get('/users', getAllUsers)
app.post('/users', createUser)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})