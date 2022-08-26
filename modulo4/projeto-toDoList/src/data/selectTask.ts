import { connection } from "./baseDataBase"

export default async function selectTask(id:string): Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM TaskTodoList
        WHERE id="${id}";
    `)
    
    return result[0][0]
}