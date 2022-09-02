import { Request, Response } from "express"
import { selectAllUsers } from "../data/queries/selectAllUsers"

// Função que pega todas os usuário 
export const getAllUsers = async (req: Request, res: Response): Promise <void> => {
    try {
        const usersList = await selectAllUsers()

        if(usersList.length < 1) {
            res.statusCode = 404
            throw new Error("Não existem usuários!");
        }

        res.status(200).send(usersList)

    } catch (error:any) {
        res.status(500).send({ message: error.message })
    }
}