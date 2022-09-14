import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = async() => {
    const usersCreate = await connection
    .raw(`
        CREATE TABLE IF NOT EXISTS labecommerce_users (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        )
    `)
    const productsCreate = await connection.raw(`
        CREATE TABLE IF NOT EXISTS labecommerce_products (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price float NOT NULL,
            image_url VARCHAR(255) NOT NULL
        );
    `)
    const purchacesCreate = await connection.raw(`
        CREATE TABLE IF NOT EXISTS labecommerce_purchases (
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            product_id VARCHAR(255) NOT NULL,
            quantity INT NOT NULL,
            total_price float NOT NULL,
            FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
            FOREIGN KEY (product_id) REFERENCES labecommerce_products(id)
        );
    `)
    .then(() => { console.log("Tabelas criadas") })
    .catch(printError)
}

const closeConnection = () => { connection.destroy() }

createTables()
    .then(() => { console.log("Banco Pronto") })
    .finally(closeConnection)