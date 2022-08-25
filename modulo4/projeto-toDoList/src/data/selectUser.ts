import { connection } from "./baseDataBase"

export default async function selectUser(id: string){
    const result = await connection("user_to_do_list")
    .select('*')
    .where({id})

    return result[0][0]
}