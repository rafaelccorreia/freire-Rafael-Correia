import { connection } from "./baseDataBase"

export default async function selectAllUsers(): Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM UserTodoList;
    `)
    console.log(result)

    return [...result[0]]
}