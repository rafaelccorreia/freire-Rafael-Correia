import { connection } from "../connection"
import { User } from "../../types"

export const insertUser = async (user: User): Promise<void> => {
    const result = await connection.raw(`
        INSERT INTO labecommerce_users(id, name, email, password)
        VALUES(
            "${user.id}",
            "${user.name}",
            "${user.email}",
            "${user.password}"
        )
    `) 
}