import { AddressInfo } from "net"

import { app } from "./app"
import { createProduct } from "./endpoints/createProduct"
import { createPurchases } from "./endpoints/createPurchases"
import { createUser } from "./endpoints/createUser"
import { getAllProducts } from "./endpoints/getAllProducts"
import { getAllPurchasesFromUser } from "./endpoints/getAllPurchasesFromUser"
import { getAllUsers } from "./endpoints/getAllUsers"

app.get('/users', getAllUsers)
app.post('/users', createUser)

app.get('/products', getAllProducts)
app.post('/products', createProduct)

app.get("/users/:userId/purchases", getAllPurchasesFromUser)
app.post('/purchases', createPurchases)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})