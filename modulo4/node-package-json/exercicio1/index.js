// Exercício 1
// para acessar os parâmetros passado na linha de código do node basta usar a sintaxe
// process.argv[index do parâmetro]
const nome = process.argv[2]
const idade = Number(process.argv[3])

if(nome && idade) {
    console.log("\x1b[33m", `Olá, ${nome}! Você tem ${idade} anos.`)
    console.log("\x1b[33m", `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)
}
else {
    console.log("\x1b[33m", `Esperava 2 parâmetros, só recebi um.`)
}
