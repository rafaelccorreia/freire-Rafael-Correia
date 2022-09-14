import { connection } from "./baseDataBase"

export default async function insertTask(data:any): Promise<any> {
    const result = await connection.raw(`
        INSERT INTO TaskTodoList(id, title, description, limit_date, creator_user_id)
        VALUES(
            "${data.id}",
            "${data.title}",
            "${data.description}",
            "${data.limitDate}",
            "${data.creatorUserId}"
        );
    `)
    return result[0]
}