import { Request, Response } from "express"
import selectUserCreatedTasks from "../data/selectUserCreatedTasks"

export default async function getTasksFromUser(req:Request, res:Response) {
    let errorStatus:number = 400
    try {
        const creatorUserId = req.query.creatorUserId as string
        console.log(creatorUserId)

        if(!creatorUserId){
            throw new Error('Creator id is necessary')
        }
        
        const userCreatedTasks: Object[] = await selectUserCreatedTasks(creatorUserId)

        res.status(200).send(userCreatedTasks)

    } catch(error:any) {
        if(error.message === 'Creator id is necessary') {
            res.status(errorStatus).send({message: error.message || error.sqlMessage })
        } else {
            res.status(500).send({message: error.sqlMessage || "Unexpected Error"})
        }
    }
}