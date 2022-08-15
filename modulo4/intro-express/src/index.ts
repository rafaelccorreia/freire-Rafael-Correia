import express from "express"
import cors from 'cors'
import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})

//exercício 1
app.get("/", (req, res) => {
    res.send("Hello from Express")
})

//exercício 2
type User = {
    id: string,
    name: string,
    phone: string,
    email: string,
    website: string
}

//exercício 3
const UsersList: User[] = [
    {
        id: "1",
        name: "Aatrox",
        phone: "87989-8989",
        email: "aaMegaDarkin@gmail.com",
        website: "despair.blog.com"
    },
    {
        id: "2",
        name: "Alistar",
        phone: "00009-8989",
        email: "chifrada@gmail.com",
        website: "mino.blog.com"
    },
    {
        id: "3",
        name: "Carlos",
        phone: "16855-4656",
        email: "johnson@gmail.com",
        website: "grove.street.com"
    },
    {
        id: "4",
        name: "Homelander",
        phone: "12345-7595",
        email: "youretherealhero@gmail.com",
        website: "seven.the.com"
    },
    {
        id: "5",
        name: "French",
        phone: "22323-1111",
        email: "moncouer@gmail.com",
        website: "moncouer.com"
    },
    {
        id: "6",
        name: "teste",
        phone: "11111-1111",
        email: "teste@gmail.com",
        website: "teste.com"
    },
]

//exercício 4
app.get('/users', (req, res) => {
    res.send(UsersList)
})

//exercício 5
type Post = {
    id: number,
    title: string,
    body: string,
    userId: string
}

//exercício 6
// acho que o array de posts deve ser criado fora do array de usuários para que os posts
// tenham uma organização própria, assim na hora de uma possível impressão dos dados pelo front-end
// os posts não será impressos de usuário por usuário
const postsList: Post[] = [
    {
        id: 1,
        title: "A que dos ascendentes",
        body: "Todos os dakin já foram guerreiros respeitados que lutavam por justiça, após a queda o imperador, sem ninguém para seguir, viramos criaturas amaldiçoadas.",
        userId: "1"
    },
    {
        id: 2,
        title: "Grove Street",
        body: "Lar, pelo menos era antes que eu estragasse tudo.",
        userId: "3"
    },
    {
        id: 3,
        title: "Thank you",
        body: "You Guys Are The Real Heroes, We Are Just Glad We Can Help",
        userId: "4"
    },
    {
        id: 4,
        title: "Debandada",
        body: "Se mecher com o touro, vai levar uma chifrada!",
        userId: "2"
    },
    {
        id: 5,
        title: "teste",
        body: "dsfafsdaafssdafssdfasfdasdfsdfa!",
        userId: "2"
    }
]

//exercício 7
app.get('/posts', (req, res) => {
    res.send(postsList)
})

//exercício 8
app.get('/posts/:idUser', (req, res) => {
    const idUsuario:string = req.params.idUser

    const listaPostsUsuario: Post[] = postsList.filter(post => {
        return idUsuario === post.userId
    })

    res.send(listaPostsUsuario)
})

//exercício 9
app.delete('/posts/:postId', (req, res) => {
    const postId:number = Number(req.params.postId)
    postsList.forEach(post => {
        if(post.id === postId){
            let index:number = postsList.indexOf(post)
            postsList.splice(index)
        }
    })
    res.status(200).send(postsList)
})

//exercício 10
app.delete('/users/:idUser', (req, res) => {
    const usuarioId = req.params.idUser
    UsersList.forEach(usuario => {
        if(usuario.id === usuarioId){
            let index:number = UsersList.indexOf(usuario)
            UsersList.splice(index)
        }
    })
    console.log(UsersList)
    res.status(200).send(UsersList)
})