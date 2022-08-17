//exercicio 2
export type Produto = {
    id: string,
    name: string,
    price: number
}

export const listaProdutos: Produto[] = [
    {
        id: '0',
        name: 'camisa',
        price: 50
    },
    {
        id: '1',
        name: 'calça',
        price: 150
    },
    {
        id: '2',
        name: 'sapato',
        price: 2000
    }
]