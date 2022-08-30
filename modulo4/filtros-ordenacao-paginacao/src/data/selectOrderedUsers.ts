import { connection } from '../index'

export default async function selectOrderedUsers(order:string): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio
        ORDER BY ${order} ASC;
    `)

    return result[0]
}