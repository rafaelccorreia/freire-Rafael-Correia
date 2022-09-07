import { Request, Response } from "express"
import selectOrderedUsers from "../data/selectOrderedUsers"

export const getAllUsersEx2 = async (req: Request, res: Response): Promise<void> => {
    try {
        let order = req.query.order as string

        if(!order || !(order === "name" || order === "type")){
            order = "email"
        }

        const users = await selectOrderedUsers(order)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error:any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}