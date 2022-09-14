import knex, { Knex } from "knex"
import dotenv from "dotenv"

dotenv.config()


class BaseDataBase {

    private connetion: Knex | null = null;

    protected getConnection() {
        
        if (!this.connetion) {
            this.connetion = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    database: process.env.DB_DATABASE,
                    password: process.env.DB_PASSWORD,
                    port: 3306
                }
            })
        }

        return this.connetion
    }
}
export default BaseDataBase