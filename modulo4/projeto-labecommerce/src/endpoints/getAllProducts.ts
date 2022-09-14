import { Request, Response } from "express"

import {selectAllProducts} from "../data/queries/selectAllProducts"

export const getAllProducts = async (req:Request, res:Response): Promise <void> => {
    try {
        const productsList = await selectAllProducts()

        if(productsList.length < 1) {
            res.statusCode = 404
            throw new Error("Nenhum produto encontrado!")
        }

        res.status(200).send(productsList)
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}