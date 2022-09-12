import { Request, Response } from "express"
import UserData from "../data/UserData"
import { EmailInvalido } from "../error/EmailInvalido"
import { SenhaInvalida } from "../error/SenhaInvalida"
import { gerarId } from "../services/gerarId"
import { gerarToken } from "../services/gerarToken"
import { pegarDados } from "../services/pegarDados"

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

    public async login (req: Request, res: Response) {
        try {
            
            const { email, password } = req.body

            if(!email || !(email.includes('@'))) {
                throw new EmailInvalido()
            }

            const userData: UserData = new UserData()

            const usuario = await userData.selecionarUsuarioPorEmail(email)

            if(usuario.password !== password) {
                throw new SenhaInvalida()
            }

            const token = gerarToken({
                id: usuario.id,
            })

            res.status(200).send({
                token,
            })

        } catch (error:any) {
            res.status(error.statusCode || 500).send({ message: error.sqlMessage || error.message })
        }
    }

    public async pegarDadosUsuario (req: Request, res: Response) {
        try {
            
            const token = req.headers.authorization as string
            
            const authenticationData = pegarDados(token)

            const userData: UserData = new UserData()

            const usuario = await userData.selecionarUsuarioPorId(authenticationData.id)

            res.status(200).send({
                id: usuario.id,
                email: usuario.email
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.sqlMessage || error.message })
        }
    }
}