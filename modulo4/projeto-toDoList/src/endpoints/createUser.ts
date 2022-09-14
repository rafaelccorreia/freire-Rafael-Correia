import { Request, Response } from "express"
import insertUser from "../data/insertUser"

export default async function createUser(req: Request, res: Response){
    let errorStatus:number = 400
    try {
        const {name, nickname, email} = req.body

        if(!name || !(typeof name === "string")){
            throw new Error('Empty | invalid value for name')
        }
        if(!nickname || !(typeof nickname === "string")){
            throw new Error('Empty | invalid value for nickname')
        }
        if(!email || !(typeof email === "string")){
            throw new Error('Empty | invalid value for email')
        }

        const userData:Object = {
            id: Date.now().toString(),
            name: name,
            nickname: nickname,
            email: email
        }

        const resp = await insertUser(userData)
        res.status(200).send(resp)

    } catch (error:any) {
        switch(error.message){
            case 'Empty | invalid value for name':
                res.status(errorStatus).send({message: error.message || error.sqlMessage})
                break
            case 'Empty | invalid value for nickname':
                res.status(errorStatus).send({message: error.message || error.sqlMessage})
                break
            case 'Empty | invalid value for email':
                res.status(errorStatus).send({message: error.message || error.sqlMessage})
                break
            default:
                console.log(error.sqlMessage)
                res.status(500).send({message: "Erro inesperado" || error.sqlMessage})
                break
        }
    }
}