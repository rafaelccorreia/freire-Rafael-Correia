import { Request, Response } from "express"
import insertTask from "../data/insertTask"

export default async function createTask(req: Request, res:Response) {
    let errorStatus:number = 400
    try {
        const {title, description, limitDate, creatorUserId} = req.body
        let dataRegex = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/)
        
        if(!title || !(typeof title === "string")){
            errorStatus = 422
            throw new Error('Empty or invalid value for title')
        }
        if(!description || !(typeof description === "string")){
            errorStatus = 422
            throw new Error('Empty or invalid value for description')
        }
        if(!limitDate || !(typeof limitDate === "string") || !dataRegex.test(limitDate)){
            errorStatus = 422
            throw new Error('Empty or invalid value for limitDate')
        }
        if(!creatorUserId || !(typeof creatorUserId === "string")){
            errorStatus = 422
            throw new Error('Empty or invalid value for creatorUserId')
        }

        let dataSplit:string[] = limitDate.split('')
        let year:string = dataSplit[6] + dataSplit[7] + dataSplit[8] + dataSplit[9]
        let month:string = dataSplit[3] + dataSplit[4]
        let day:string = dataSplit[0] + dataSplit[1]
        let dataFormatada:string = year + "-" + month + "-" + day
        console.log(dataFormatada)

        const taskData: Object = {
            id: Date.now().toString(),
            title: title,
            description: description,
            limitDate: dataFormatada,
            creatorUserId: creatorUserId
        }

        const respDataBase = await insertTask(taskData)

        res.status(200).send(`New Task created`)

    } catch (error:any) {
        switch(error.message){
            case 'Empty or invalid value for title':
                res.status(errorStatus).send({message: error.message || error.sqlMessage})
                break
            case 'Empty or invalid value for description':
                res.status(errorStatus).send({message: error.message || error.sqlMessage})
                break
            case 'Empty or invalid value for limitDate':
                res.status(errorStatus).send({message: error.message || error.sqlMessage})
                break
            case 'Empty or invalid value for creatorUserId':
                res.status(errorStatus).send({message: error.message || error.sqlMessage})
                break
            default:
                res.status(500).send({message: error.sqlMessage || "Unexpected Error"})
                break
        }
    }
}