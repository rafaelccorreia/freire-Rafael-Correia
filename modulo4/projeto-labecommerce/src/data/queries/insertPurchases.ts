import { connection } from "../connection"
import { Purchase } from "../../types"

export const insertPurchases = async(purchase:Purchase): Promise<void> => {
    const resp = await connection.raw(`
        INSERT INTO labecommerce_purchases(id, user_id, product_id, quantity, total_price)
        VALUES(
            "${purchase.id}",
            "${purchase.userId}",
            "${purchase.productId}",
            "${purchase.quantity}",
            "${purchase.totalPrice}"
        );
    `)
}