import { connection } from "./baseDataBase"

export default async function insertLinkUserTask(taskId:string, userId:string): Promise<any> {
    const result = await connection.raw(`
        INSERT INTO TodoListResponsibleUserTaskRelation(task_id, responsible_user_id)
        VALUES(
            "${taskId}",
            "${userId}"
        );
    `)
    return result[0].affectedRows
}