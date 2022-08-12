enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Movie = {
    nome: string,
    anoDeLancamento: number,
    genero: GENERO,
    pontuacao?: number
}

function organizarFilme (nome:string, anoDeLancamento: number, genero: GENERO, pontuacao?:number): Movie {
    let movieObject:Movie
    if(pontuacao) {
        movieObject = {
            nome: nome,
            anoDeLancamento: anoDeLancamento,
            genero: genero,
            pontuacao: pontuacao
        }
    } else {
        movieObject = {
            nome: nome,
            anoDeLancamento: anoDeLancamento,
            genero: genero
        }
    }
    return movieObject
}

console.log(organizarFilme('Barbie', 2000, GENERO.TERROR))
console.log(organizarFilme('Barbie, o retorno', 2008, GENERO.TERROR, 100))