type Produto = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
}

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const estoque: Produto[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

function ordenarEstoque (estoque: Produto[]): Produto[] {
    const listaOrdenada: Produto[] = estoque.sort((a, b) => (a.quantidade as number) - (b.quantidade as number))

    const listaPrecosAjustada: Produto[] = listaOrdenada.map(produto => {
        let novoPreco: string = ajustaPreco(produto.valorUnitario as number)
        produto.valorUnitario = novoPreco
        return produto
    })

    return listaPrecosAjustada
}

console.table(ordenarEstoque(estoque))