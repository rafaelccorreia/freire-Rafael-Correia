//recebe uma array de números
// function obterEstatisticas(numeros) {

//ordena o array com o sort
//     const numerosOrdenados = numeros.sort(+
//         (a, b) => a - b
//     )

//     let soma = 0

//faz a soma de todos os números do array
//     for (let num of numeros) {
//         soma += num
//     }

//cria um objeto com o cálculo das estatísticas
//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//retorna o objeto criado
//     return estatisticas
// }

type Amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: (numeros: number[]) => number
}

//type comFUncao = {
//     nome: string,
//     funcao:(n1:number) => number
// }

