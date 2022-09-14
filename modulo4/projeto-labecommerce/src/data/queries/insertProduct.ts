import { Product } from "../../types"
import { connection } from "../connection"

export const insertProduct = async (product: Product): Promise<void> => {
    const result = await connection.raw(`
        INSERT INTO labecommerce_products (id, name, price, image_url)
        VALUES(
            "${product.id}",
            "${product.name}",
            "${product.price}",
            "${product.imageUrl}"
        );
    `)
}