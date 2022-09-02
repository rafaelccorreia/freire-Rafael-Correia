import { Request, Response } from "express"

import {selectAllPurchasesFromUser} from "../data/queries/selectAllPurchasesFromUser"

export const getAllPurchasesFromUser = async (req:Request, res:Response): Promise <void> => {
    try {
        const { userId }= req.params

        const purchases = await selectAllPurchasesFromUser(userId)

        if(!purchases) {
            res.statusCode = 404
            throw new Error("Este usuário não fez compras ainda!")
        }

        res.status(200).send(purchases)
    } catch (error: any) {
        res.status(500).send({ message: error.sqlMessage || error.message })
    }
}