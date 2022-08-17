export type Produto = {
    id: string,
    name: string,
    price: number
}

export const listaProdutos: Produto[] = [
    {
        id: '12a3',
        name: 'camisa',
        price: 50
    },
    {
        id: '45b6',
        name: 'calça',
        price: 150
    },
    {
        id: '78c9',
        name: 'sapato',
        price: 2000
    }
]