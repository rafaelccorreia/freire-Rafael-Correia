import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"

export default async function getAllUsers(req:Request, res:Response) {
    try {
        const usersArray: Object[] = await selectAllUsers()

        res.status(200).send(usersArray)
    } catch (error:any) {
        if(error.sqlMessage) {
            res.status(400).send({message: error.sqlMessage})
        } else {
            res.status(500).send({message: "Unexpected Error"})
        }
    }
}