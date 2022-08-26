import { connection } from "./baseDataBase"

export default async function selectAllUsersResponsibleTask(id:string): Promise<any> {
    const result = await connection.raw(`
        SELECT UserTodoList.id, UserTodoList.nickname
        FROM UserTodoList
        LEFT JOIN TodoListResponsibleUserTaskRelation ON responsible_user_id = id
        WHERE task_id = "${id}"
    `)
    console.log(result[0])
    return result[0]
}