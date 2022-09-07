import { connection } from '../index'

export default async function selectAllUsersEx1b(tipo:string): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio
        WHERE type = "${tipo}";
    `)

    return result[0]
}
