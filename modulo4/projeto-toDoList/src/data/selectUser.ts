import { connection } from "./baseDataBase"

export default async function selectUser(id: string){
    const result = await connection.raw(`
        SELECT * FROM UserTodoList WHERE id = "${id}"
    `)

    return result[0][0]
}