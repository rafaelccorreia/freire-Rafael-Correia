type Produto = {
    nome: string,
    preco: number,
    classificacao: string
}
type Produto2 = {
    nome: string,
    preco: number,
    classificacao: string,
    precoDesconto: number
}



function calcularDesconto(listaProdutos: Produto[]): Produto[] {
    let precoComDesconto: number
    let newProduct:Produto2
    const novaLista: Produto2[] = listaProdutos.map(produto => {
        switch(produto.classificacao) {
            case 'verao':
                precoComDesconto = produto.preco * 0.05
                newProduct = {...produto, precoDesconto: precoComDesconto}
                break;
            case 'inverno':
                precoComDesconto = produto.preco * 0.1
                newProduct = {...produto, precoDesconto: precoComDesconto}
                break;
            case 'banho':
                precoComDesconto = produto.preco * 0.04
                newProduct = {...produto, precoDesconto: precoComDesconto}
                break;
            case 'intimas':
                precoComDesconto = produto.preco * 0.07
                newProduct = {...produto, precoDesconto: precoComDesconto}
                break;
        }
        return newProduct
    })
    return novaLista
}