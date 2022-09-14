import { Request, Response } from "express"
import selectTask from "../data/selectTask"

export default async function getTask(req:Request, res:Response) {
    let errorStatus:number = 400
    try {
        const {id} = req.params
        
        const task = await selectTask(id)
        if(!task){
            errorStatus = 422
            throw new Error('User not found')
        }

        res.status(200).send(task)

    } catch(error:any) {
        if(error.message === 'User not found') {
            res.status(errorStatus).send({message: error.message || error.sqlMessage })
        } else {
            res.status(500).send({message: "Unexpected Error"})
        }
    }
}