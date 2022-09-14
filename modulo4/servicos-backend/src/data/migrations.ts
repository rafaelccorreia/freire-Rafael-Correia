import { connection } from "./connection"
const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createAdressTable = () => connection.raw(`
    CREATE TABLE IF NOT EXISTS adress_user_table (
        user_id VARCHAR(255) PRIMARY KEY,
        CEP VARCHAR(255) NOT NULL,
        logradouro VARCHAR(255) NOT NULL,
        numero INT NOT NULL,
        complemento VARCHAR(255) NULL,
        bairro VARCHAR(255) NOT NULL,
        cidade VARCHAR(255) NOT NULL,
        estado VARCHAR(255) NOT NULL
    );
`)
    .then(() => { console.log("Tabela de endereços criada") })
    .catch(printError)

const closeConnection = () => { connection.destroy() }

createAdressTable()
    .then(() => console.log("Tudo pronto!"))
    .finally(closeConnection)