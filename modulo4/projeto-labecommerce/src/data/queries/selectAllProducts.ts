import { Product } from "../../types"
import { connection } from "../connection"

export const selectAllProducts = async(): Promise <Product[]> => {
    const products = await connection.raw(`
        SELECT * FROM labecommerce_products;
    `)

        return products[0]
}