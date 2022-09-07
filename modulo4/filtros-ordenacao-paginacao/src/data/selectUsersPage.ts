import { connection } from '../index'

export default async function selectUsersPage(offSet:number): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio
        LIMIT ${offSet}, 5;
    `)

    return result[0]
}