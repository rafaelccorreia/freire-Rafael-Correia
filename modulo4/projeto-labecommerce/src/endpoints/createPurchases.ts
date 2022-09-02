import { Request, Response } from "express"

import { insertPurchases } from "../data/queries/insertPurchases"
import { Purchase } from "../types"

export const createPurchases = async (req:Request, res:Response): Promise <void> => {
    try {
        const { userId, productId, quantity, price } = req.body

        if(!userId || !productId || !quantity) {
            res.statusCode = 400
            throw new Error("'userId', 'productId' e 'quantity são obrigatórios!"); 
        }

        const totalPrice = price * quantity

        const purchase: Purchase = {
            id: Date.now().toString(),
            userId,
            productId,
            quantity,
            totalPrice
        }

        const result = await insertPurchases(purchase)

        res.status(201).send("Compra feita com sucesso!")
    } catch (error: any) {
        res.status(500).send({ message: error.sqlMessage || error.message })
    }
}