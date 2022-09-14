import { Request, Response } from "express"
import updateUser from "../data/updateUser"

export default async function editUser(req: Request, res: Response){
    let errorStatus: number = 400
    try {
        const id:string = req.params.id
        const {name, nickname, email} = req.body

        if(!name || !(typeof name === "string")){
            errorStatus = 422
            throw new Error('Empty | Invalid value for name')
        }
        if(!nickname || !(typeof nickname === "string")){
            errorStatus = 422
            throw new Error('Empty | Invalid value for nickname')
        }
        if(!email || !(typeof email === "string")){
            errorStatus = 422
            throw new Error('Empty | Invalid value for email')
        }

        const dataBody:Object = {
            name: name,
            nickname: nickname,
            email: email
        }
        const respo = await updateUser(id, dataBody)

        if(!respo) {
            errorStatus = 422
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send({message: "User updated"})

    } catch (error:any) {
        switch(error.message){
            case 'Empty | Invalid value for name':
                res.status(errorStatus).send({message: error.message || error.sqlMessage})
                break
            case 'Empty | Invalid value for nickname':
                res.status(errorStatus).send({message: error.message || error.sqlMessage})
                break
            case 'Empty | Invalid value for email':
                res.status(errorStatus).send({message: error.message || error.sqlMessage})
                break
            case "Usuário não encontrado":
                res.status(errorStatus).send({message: error.message || error.sqlMessage})
                break
            default:
                res.status(500).send("Unespected Error")
                break
        }
    }
}