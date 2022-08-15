// Exercícios 3
let listaTarefas = [
    "Tarefa exemplo",
    "Resolver os exercícios"
]

const novaTarefa = process.argv[2]
listaTarefas.push(novaTarefa)
console.log(`Tarefa adicionada com sucesso!`)
console.log(listaTarefas)