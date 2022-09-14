import { connection } from "./baseDataBase"

export default async function updateUser(id: string, data: any){
    const result = await connection.raw(`
        UPDATE UserTodoList 
        SET name="${data.name}", nickname="${data.nickname}", email="${data.email}" 
        WHERE id="${id}"
    `)

    return result[0].changedRows
}