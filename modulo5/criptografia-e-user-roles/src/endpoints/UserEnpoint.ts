import { Request, Response } from "express"
import UserData from "../data/UserData"
import { EmailInvalido } from "../error/EmailInvalido"
import { RoleInvalida } from "../error/RoleInvalida"
import { SenhaInvalida } from "../error/SenhaInvalida"
import { UsuarioNormalApenas } from "../error/UsuarioNormalApenas"
import { gerarId } from "../services/gerarId"
import { gerarToken } from "../services/gerarToken"
import { HashManager } from "../services/HashManager"
import { pegarDados } from "../services/pegarDados"

enum ROLE {
    NORMAL = 'normal',
    ADMIN = 'admin'
}

export class UserEndpoint {
    public async criarUsuario(req: Request, res: Response) {
        try {
            
            const { email, password, role } = req.body

            if(!email || !(email.includes('@'))) {
                throw new EmailInvalido()
            }

            if(!password || password.length < 6) {
                throw new SenhaInvalida()
            }

            if(!Object.values(ROLE).includes(role)) {
                throw new RoleInvalida()
            }

            const userData: UserData = new UserData()
            const hashManager: HashManager = new HashManager()

            const id = gerarId()

            const hashPassword = await hashManager.hash(password)

            await userData.insertUser(id, email, hashPassword, role)

            const token = gerarToken({
                id,
                role,
            })

            res.status(200).send({
                token: token
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
            const hashManager: HashManager = new HashManager()

            const usuario = await userData.selecionarUsuarioPorEmail(email)

            const compararHash = await hashManager.compare(
                password,
                usuario.password
            )

            if(!compararHash) {
                throw new SenhaInvalida()
            }

            const token = gerarToken({
                id: usuario.id,
                role: usuario.role,
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

            if(usuario.role !== "normal") {
                throw new UsuarioNormalApenas()
            }

            res.status(200).send({
                id: usuario.id,
                email: usuario.email
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.sqlMessage || error.message })
        }
    }
}