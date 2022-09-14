import { connection } from "./baseDataBase"

export default async function selectUserFromQuery(querySearch:string): Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM UserTodoList
        WHERE nickname LIKE "${"%" + querySearch + "%"}" OR email LIKE "${"%" + querySearch + "%"}";
    `)
    console.log(result)

    return [...result[0]]
}