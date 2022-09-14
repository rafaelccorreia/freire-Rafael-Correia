import { connection } from "../connection"
import { Purchase } from "../../types"

export const selectAllPurchasesFromUser = async(userId: string): Promise <Purchase[]> => {
    const resp = await connection.raw(`
        SELECT labecommerce_users.id, labecommerce_users.name, labecommerce_users.email, labecommerce_products.name, labecommerce_products.price, labecommerce_products.image_url, labecommerce_purchases.quantity, labecommerce_purchases.total_price FROM labecommerce_purchases
        INNER JOIN labecommerce_users ON labecommerce_users.id = labecommerce_purchases.user_id
        INNER JOIN labecommerce_products ON labecommerce_products.id = labecommerce_purchases.product_id
        WHERE labecommerce_users.id = "${userId}";
    `)

        return resp[0]
}