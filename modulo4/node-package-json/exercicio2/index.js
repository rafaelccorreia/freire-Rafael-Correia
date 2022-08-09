// Exercício 2
const operacao = process.argv[2]
const valor1 = Number(process.argv[3])
const valor2 = Number(process.argv[4])

if(operacao && valor1 && valor2) {
    if(operacao === 'add') {
        console.log('\u001b[34m', "Resposta: ", valor1 + valor2)
    }
    else if(operacao === 'sub') {
        console.log('\u001b[34m', "Resposta: ", valor1 - valor2)
    }
    else if(operacao === 'mult') {
        console.log('\u001b[34m', "Resposta: ", valor1 * valor2)
    }
    else if(operacao === 'div') {
        console.log('\u001b[34m', "Resposta: ", valor1 / valor2)
    }
    else {
        console.log('\u001b[34m', 'Operação inválida. Opções: add - sub - mult - div')
    }
} else {
    console.log('\u001b[31m', "Esperava 3 parâmetros, recebi menos que isso...")
}
