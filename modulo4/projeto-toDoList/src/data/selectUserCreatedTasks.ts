import { connection } from "./baseDataBase"

export default async function selectUserCreatedTasks(id:string): Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM TaskTodoList
        WHERE creator_user_id = "${id}";
    `)
    console.log(result)

    return [...result[0]]
}