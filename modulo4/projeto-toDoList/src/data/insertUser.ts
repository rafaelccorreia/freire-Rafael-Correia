import { connection } from "./baseDataBase"

export default async function insertUser(user: any): Promise<any> {
    const result = await connection.raw(`
        INSERT INTO UserTodoList(id, name, nickname, email)
        VALUES(
            '${user.id as string}',
            '${user.name as string}',
            '${user.nickname as string}',
            '${user.email as string}'
        );
    `)

    return result[0][0]
}