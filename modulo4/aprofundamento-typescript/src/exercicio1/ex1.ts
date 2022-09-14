// a) 
// let minhaString: string = 23
// aparece um erro mostrando que tentei atribuir um valor de um tipo diferente da variável

// b) 
// let meuNumero: number = 23
// para a variável aceitar mais de um tipo, basta utilizar Union type
let meuNumero: number | string = "23"

// c) && d)
enum arcoIris {
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'
}


type Person = {
    nome: string,
    idade: number,
    corFavorita: arcoIris
}

const obj1: Person = {
    nome: 'Carl',
    idade: 25,
    corFavorita: arcoIris.VERDE
}

const obj2: Person = {
    nome: 'Denise',
    idade: 21,
    corFavorita: arcoIris.VERMELHO
}

const obj3: Person = {
    nome: 'Sweet',
    idade: 30,
    corFavorita: arcoIris.VERDE
}

//teste
const arrayPersons: Person[] = [obj1, obj2, obj3]
console.log(arrayPersons)