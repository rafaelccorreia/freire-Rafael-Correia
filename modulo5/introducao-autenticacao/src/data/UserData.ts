import BaseDataBase from "./BaseDataBase"

class UserData extends BaseDataBase {
    public userTableName = "User"

    async insertUser(id: string, email: string, password: string): Promise<void> {
        await this.getConnection().insert({
            id,
            email,
            password
        })
            .into(this.userTableName)
    }

    async selecionarUsuarioPorEmail(email: string): Promise<any> {
        const result = await this.getConnection()
            .select("*")
            .from(this.userTableName)
            .where({ email })

        return result[0]
    }
}

export default UserData