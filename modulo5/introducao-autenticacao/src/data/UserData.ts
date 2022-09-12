import BaseDataBase from "./BaseDataBase"

class UserData extends BaseDataBase {
    public userTableName = "User"

    async insertUser(id: string, email: string, password: string): Promise<void> {
        await this.getConnetion().insert({
            id,
            email,
            password
        })
        .into(this.userTableName)
    }
}

export default UserData