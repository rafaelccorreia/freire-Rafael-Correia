import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'

const app = express()
app.use(express.json())
app.use(cors())

//exercicio 1
app.get('/ping', (req, res) => {
    res.send('Pong! 🏓')
})

//exercicio 2
type Afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//exercicio 3
const listaAfazeres: Afazeres[] = [
    {
        userId: 1,
        id: 1,
        title: 'Resolução do exercício 3',
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: 'Resolução do exercício 4',
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: 'Resolução do exercício 5',
        completed: false
    },
    {
        userId: 1,
        id: 4,
        title: 'Resolução do exercício 6',
        completed: false
    },
    {
        userId: 1,
        id: 5,
        title: 'Resolução do exercício 7',
        completed: false
    },
    {
        userId: 1,
        id: 6,
        title: 'Resolução do exercício 8',
        completed: false
    },
    {
        userId: 1,
        id: 7,
        title: 'Resolução do exercício 9',
        completed: false
    },
    {
        userId: 1,
        id: 8,
        title: 'Resolução do exercício 10',
        completed: false
    },
    {
        userId: 1,
        id: 9,
        title: 'Resolução do exercício 11',
        completed: false
    },
]

//exercicio 4
app.get('/afazeres', (req, res) => {
    if(req.body.completed !== undefined) {
        let newListaAfazeres = listaAfazeres.filter(tarefa => {
            return req.body.completed === tarefa.completed
        })
        res.send(newListaAfazeres)
    } else {
        res.send(listaAfazeres)
    }
})

//exercicio 5
app.post('/afazeres/criar', (req, res) => {
    if(!req.body) {
        res.send(`Error de requisição, faltou passar o body`)
    } else {
        let novoAfazer: Afazeres = {
            userId: req.body.userId,
            id: listaAfazeres.length,
            title: req.body.title,
            completed: false
        }
        let novaListaAfazeres: Afazeres[] = [...listaAfazeres, novoAfazer]
        res.send(novaListaAfazeres)
    }
})

//exercicio 6
app.put('/afazeres/:idAfazer/status', (req, res) => {
    let newList: Afazeres[] = listaAfazeres.map(tarefa => {
        if(tarefa.id === Number(req.params.idAfazer)) {
            tarefa.completed = !tarefa.completed
            return tarefa
        } else {
            return tarefa
        }
    })

    res.send(newList)
})

//exercicio 7
app.delete('/afazeres/:idAfazer/delete', (req,res) => {
    let index: number

    listaAfazeres.forEach(tarefa => {
        if(tarefa.id === Number(req.params.idAfazer)) {
            index = listaAfazeres.indexOf(tarefa)
            let newLista: Afazeres[] = listaAfazeres
            newLista.splice(index)
            res.send(newLista)
        }
    })
    setTimeout(() => {
        if(!index) {
            res.send(`Id não encontrado`)
        }
    }, 3000)
})

//exercicio 8
app.get('/afazeres/usuario', (req,res) => {
    const idUser: number = Number(req.query.id)

    let newList: Afazeres[] = listaAfazeres.filter(afazer => {
        return afazer.userId === idUser
    })
    res.send(newList)
})


const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})