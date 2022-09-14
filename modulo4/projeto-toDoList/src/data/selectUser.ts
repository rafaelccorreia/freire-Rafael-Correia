import { connection } from "./baseDataBase"

export default async function selectUser(id: string){
    const result = await connection.raw(`
        SELECT * FROM UserTodoList WHERE id = "${id}"
    `)
    let resp: Object = {
        "id": result[0][0].id,
        "nickname": result[0][0].nickname
    }

    return JSON.stringify(resp)
}