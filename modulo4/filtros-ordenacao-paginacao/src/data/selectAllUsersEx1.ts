import { connection } from '../index'

export default async function selectAllUsersEx1(nome:string): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio
        WHERE name LIKE "${"%" + nome + "%"}";
    `)

    return result[0]
}