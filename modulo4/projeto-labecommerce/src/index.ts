import { AddressInfo } from "net"

import { app } from "./app"
import { createProduct } from "./endpoints/createProduct"
import { createUser } from "./endpoints/createUser"
import { getAllProducts } from "./endpoints/getAllProducts"
import { getAllUsers } from "./endpoints/getAllUsers"

app.get('/users', getAllUsers)
app.post('/users', createUser)

app.get('/products', getAllProducts)
app.post('/products', createProduct)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})