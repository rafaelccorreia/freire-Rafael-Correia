import { format } from "path"
import BaseDataBase from "./BaseDataBase"

class UserData extends BaseDataBase {
    public userTableName = "UserAulaAutenticao"

    async insertUser(id: string, email: string, password: string, role: string): Promise<void> {
        await this.getConnection().insert({
            id,
            email,
            password,
            role
        })
            .into(this.userTableName)
    }

    async selecionarUsuarioPorEmail(email: string): Promise<any> {
        const resultado = await this.getConnection()
            .select("*")
            .from(this.userTableName)
            .where({ email })

        return resultado[0]
    }

    public async selecionarUsuarioPorId(id: string): Promise<any> {
        const resultado = await this.getConnection()
            .select("*")
            .from(this.userTableName)
            .where({ id })

        return resultado[0]
    }
}

export default UserData