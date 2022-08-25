import { Request, Response } from "express"
import selectUser from "../data/selectUser"

export default async function getUser(req: Request, res: Response){
    try {
        const id:string = req.params.id

        const user = await selectUser(id)

        res.status(200).send(user)
    } catch (error:any) {
        res.status(400).send({message : error.message || error.sqlMessage})
    }
}
//exemplo