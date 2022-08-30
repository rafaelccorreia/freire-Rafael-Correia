import { Request, Response } from "express"
import selectAllUsersEx1 from "../data/selectAllUsersEx1"
import selectAllUsersEx1b from "../data/selectAllUsersEx1b"

export const getAllUsersEx1 = async (req: Request, res: Response): Promise<void> => {
    try {
        const nome = req.query.nome as string

        if(!nome){
            throw new Error('Nome está vazio')
        }

        const users = await selectAllUsersEx1(nome)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error:any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

export const getAllUsersEx1b = async (req: Request, res: Response): Promise<void> => {
    try {
        const tipo = req.params.tipo as string

        if(!(tipo === 'CX' || tipo === 'Operations' || tipo === 'Teacher')){
            throw new Error('Tipo inválido')
        }

        const users = await selectAllUsersEx1b(tipo)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error:any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}