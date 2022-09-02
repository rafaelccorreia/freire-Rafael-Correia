import { Request, Response } from "express"
import { insertUser } from "../data/queries/insertUser"
import { User } from "../types"

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name, email, password} = req.body

        if (!name || !email || !password) {
            res.statusCode = 400
            throw new Error("name, email e password são obrigatórios!")
        }

        const newUser: User = {
            id: Date.now().toString(),
            name,
            email,
            password
        }

        const result = await insertUser(newUser)

        res.status(201).send("Usuário criado com sucesso!")
    } catch (error:any) {
        res.status(500).send({message: error.sqlMessage || error.message})
    }
}