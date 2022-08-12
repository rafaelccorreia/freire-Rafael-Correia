function calcularFatorial (palavra:string) : number {
    const tamanhoPalavra:number = palavra.length
    let quantidadeAnagramas:number = 0

    for (let i:number = tamanhoPalavra; i > 0; i--) {
        if(quantidadeAnagramas === 0) {
            quantidadeAnagramas += (i * (i - 1)) 
            i--
        } else {
            quantidadeAnagramas += (quantidadeAnagramas * (i - 1))
        }
    }
    return quantidadeAnagramas
}

console.log(calcularFatorial('testesdfdf'))