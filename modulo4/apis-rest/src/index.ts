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

//Exercicio 3
// a) R: query
// b) R: feito
app.get('/users', (req,res) => {
    try {
        const userType: string | undefined = req.query.type as string
        const userName: string | undefined = req.query.search as string

        let listaFiltradaNome: User[]
        if(!userName) {
            listaFiltradaNome = users
        } else {
            listaFiltradaNome = users.filter(user => {
                return user.name.toLowerCase().includes(userName.toLowerCase())
            })
            if(listaFiltradaNome.length < 1) {
                throw new Error('No user found')
            }
        }

        if(!userType) {
            res.status(200).send(listaFiltradaNome)
        } else {
            if(userType === "NORMAL" || userType === "ADMIN") {
                let newUsersList: User[] = listaFiltradaNome.filter(user => {
                    return user.type === userType
                })
                res.status(200).send(newUsersList)
            } else {
                console.warn('Invalid query! ADMIN or NORMAL expected.')
                res.send(listaFiltradaNome)
            }
        }
    } catch (error: any) {
        if(error.message === 'No user found') {
            res.status(422).send({message: error.message})
        } else {
            res.status(500).send({message: "Unexpected Error"})
        }
    }
})

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});