import { Request, Response } from "express"
import selectAllUsersResponsibleTask from "../data/selectAllUsersResponsibleTask"

export default async function getAllUsersResponsibleTask(req:Request, res:Response) {
    let errorStatus:number = 400
    try {
        
        const {id} = req.params
        if(!id) {
            errorStatus = 422
            throw new Error('Task Id not found')
        }

        const usersResponsible = await selectAllUsersResponsibleTask(id)

        res.status(200).send(usersResponsible)

    } catch (error:any) {
        if(error.message === "Task Id not found"){
            res.status(errorStatus).send({message: error.message})
        } else {
            res.status(500).send({message: 'Unexpected Error'})
        }
    }
}