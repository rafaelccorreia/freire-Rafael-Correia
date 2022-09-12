import { Request, Response } from "express"
import UserData from "../data/UserData"
import { EmailInvalido } from "../error/EmailInvalido"
import { SenhaInvalida } from "../error/SenhaInvalida"
import { gerarId } from "../services/gerarId"
import { gerarToken } from "../services/gerarToken"

export class UserEndpoint {
    public async criarUsuario(req: Request, res: Response) {
        try {
            
            const { email, password } = req.body

            if(!email || !(email.includes('@'))) {
                throw new EmailInvalido()
            }

            if(!password || password.length < 6) {
                throw new SenhaInvalida()
            }

            const id = gerarId()
            const userData: UserData = new UserData()

            await userData.insertUser(id, email, password)

            const token = gerarToken({
                id,
            })

        } catch (error:any) {
            res.status(error.statusCode || 500).send({ message: error.sqlMessage || error.message })
        }
    }

    
}