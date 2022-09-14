import { Request, Response } from "express"
import insertLinkUserTask from "../data/insertLinkUserTask"

export default async function linkUserToTask(req:Request, res:Response) {
    let errorStatus:number = 400
    try {
        
        const {task_id, responsible_user_id} = req.body

        if(!task_id || !(typeof task_id === "string")){
            errorStatus = 422
            throw new Error('Empty | Invalid value for task_id')
        }
        if(!responsible_user_id || !(typeof responsible_user_id === "string")){
            errorStatus = 422
            throw new Error('Empty | Invalid value for responsible_user_id')
        }

        const createLinkResult = await insertLinkUserTask(task_id, responsible_user_id)

        res.status(200).send("User was linked to task")

    } catch (error:any) {
        switch(error.message){
            case 'Empty | Invalid value for task_id':
                res.status(errorStatus).send({message: error.message || error.sqlMessage})
                break
            case 'Empty | Invalid value for responsible_user_id':
                res.status(errorStatus).send({message: error.message || error.sqlMessage})
                break
            default:
                res.status(500).send({message: error.sqlMessage || 'Unexpected Error'})
                break
        }
    }
}