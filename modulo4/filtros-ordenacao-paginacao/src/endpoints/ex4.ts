import { Request, Response } from "express"
import selectAllUsersEx4 from "../data/selectAllUsersEx4"

export const getAllUsersEx4 = async (req: Request, res: Response): Promise<void> => {
    try {
        let page:number = Number(req.params.page) 
        let offSet:number = (page - 1) * 5
        let order = req.query.order as string
        let nome = req.query.name as string
        const tipo = req.query.tipo as string

        if(!order || !(order === "name" || order === "type" || order === "email")){
            order = "name"
        }

        if(!page || !(typeof page === "number")) {
            throw new Error('Número inválido de página')
        }

        let users = await selectAllUsersEx4(offSet, order)

        if(nome && tipo) {
            users = await selectAllUsersEx4(offSet, order, nome, tipo)
        }
        else if(nome) {
            users = await selectAllUsersEx4(offSet, order, nome)
        } 
        else if(tipo) {
            users = await selectAllUsersEx4(offSet, order, '',tipo)
        }

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error:any) {
        console.log(error)
        res.send({message: error.message || error.sqlMessage})
    }
}