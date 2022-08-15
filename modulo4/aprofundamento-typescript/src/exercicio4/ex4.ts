type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// b) configurando um script no package.json com função de "tsc ex4.ts"

// c) criando um script com "tsc ./src/ex5.ts"

// d) sim, basta separar por espaços. Ex: tsc file1.ts file2.ts file3.ts