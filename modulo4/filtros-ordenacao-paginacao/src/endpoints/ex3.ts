import { Request, Response } from "express"
import selectUsersPage from "../data/selectUsersPage"

export const getAllUsersPage = async (req: Request, res: Response): Promise<void> => {
    try {
        let page:number = Number(req.params.page) 
        let offSet:number = (page - 1) * 5

        if(!page || !(typeof page === "number")) {
            throw new Error('Número inválido de página')
        }
        const users = await selectUsersPage(offSet)

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