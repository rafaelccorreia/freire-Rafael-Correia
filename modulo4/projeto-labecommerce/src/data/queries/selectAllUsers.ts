import { connection } from "../connection"
import { User } from "../../types"

export const selectAllUsers = async(): Promise <User[]> => {
    const users = await connection.raw(`
        SELECT id, name, email FROM labecommerce_users;
    `)

    return users[0]
}