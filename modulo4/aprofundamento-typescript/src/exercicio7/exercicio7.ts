type Produto = {
    nome: string,
    preco: number,
    classificacao: string
}

function calcularDesconto(listaProdutos: Produto[]): Produto[] {
    const novaLista: Produto[] = listaProdutos.map(produto => {
        switch(produto.classificacao) {
            
        }
    })
    return novaLista
}