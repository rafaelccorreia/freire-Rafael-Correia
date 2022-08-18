import express, { Express } from "express";
import cors from "cors";

import { users } from "./data/users";

const app: Express = express();
app.use(express.json());
app.use(cors());

// Exercicio 1
// a) R: Método Get
// b) R: "/users" como entidade
app.get('/users', (req,res) => {
    res.status(200).send(users)
})

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});