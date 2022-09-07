import { connection } from "./connection"

export default async function insertNewAddress(endereco:any): Promise<void> {
    const result = await connection.raw(`
        INSERT INTO adress_user_table(user_id, CEP, logradouro, numero, complemento, bairro, cidade, estado)
        VALUES(
            ${endereco.user_id},
            ${endereco.CEP}
            ${endereco.logradouro}
            ${endereco.numero}
            ${endereco.complemento}
            ${endereco.bairro}
            ${endereco.cidade}
            ${endereco.estado}
        );
    `)

    return result[0]
}