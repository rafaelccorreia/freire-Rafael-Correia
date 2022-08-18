import express, { Express } from "express";
import cors from "cors";

import { users } from "./data/users";
import { User } from "./types";

const app: Express = express();
app.use(express.json());
app.use(cors());

// Exercicio 1
// a) R: Método Get
// b) R: "/users" como entidade
// Exercicio 2
// a) R: Passei os parâmetros por query, escolhi por ser mais adequado à uma informação pequena e condicional que não é obrigatória
// b) R: Coloquei uma condicional no código para enviar um aviso caso os parâmetros errados sejam passados
app.get('/users', (req,res) => {
    try {
        const userType: string | undefined = req.query.type as string

        if(!userType) {
            res.status(200).send(users)
        } else {
            if(userType === "NORMAL" || userType === "ADMIN") {
                let newUsersList: User[] = users.filter(user => {
                    return user.type === userType
                })
                res.status(200).send(newUsersList)
            } else {
                console.warn('Invalid query! ADMIN or NORMAL expected.')
                res.send(users)
            }
        }
    } catch (error: any) {
        res.status(500).send({message: "Unexpected Error"})
    }
})

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});