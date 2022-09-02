import { Request, Response } from "express"

import {insertProduct} from "../data/queries/insertProduct"
import { Product } from "../types"

export const createProduct = async (req: Request, res: Response): Promise <void> => {
    try {
        
        const { name, price, imageUrl } = req.body

        if(!name || !price || !imageUrl) {
            res.statusCode = 400
            throw new Error("'name', 'price' e 'imageUrl' são obrigatórios!")
        }

        const product: Product = {
            id: Date.now().toString(),
            name,
            price,
            imageUrl
        }

        await insertProduct(product)

        res.status(201).send("Produto cadastrado com sucesso!")

    } catch (error:any) {
        res.status(500).send({message: error.sqlMessage || error.message})
    }
}