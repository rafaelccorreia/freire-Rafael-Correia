import { Request, Response } from "express"
import selectUserFromQuery from "../data/selectUserFromQuery"

export default async function searchUser(req:Request, res:Response) {
    let errorStatus:number = 400
    try {
        const queryValue = req.query.query as string
        console.log(queryValue)

        if(!queryValue){
            throw new Error('A query search value is necessary')
        }
        
        const userDatabaseQuery: Object[] = await selectUserFromQuery(queryValue)

        res.status(200).send(userDatabaseQuery)

    } catch(error:any) {
        if(error.message === 'A query search value is necessary') {
            res.status(errorStatus).send({message: error.message || error.sqlMessage })
        } else {
            res.status(500).send({message: error.sqlMessage || "Unexpected Error"})
        }
    }
}