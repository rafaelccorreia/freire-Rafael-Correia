import { Request, Response } from "express"

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

        let dataFormatada:string = limitDate.split('').reverse().join().replace('/', '.')
        console.log(dataFormatada)

        const taskData: Object = {
            id: Date.now().toString(),
            title: title,
            description: description,
            limitDate: dataFormatada,
            creatorUserId: creatorUserId
        }

        const respDataBase = await insertTask(taskData)

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
                res.status(500).send({message: "Unespected Error"})
                break
        }
    }
}