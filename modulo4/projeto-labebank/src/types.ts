export type Gasto = {
    valor: number,
    data: string,
    descricao: string
}

export type Conta = {
    nome: string,
    CPF: string,
    dataDeNascimento: string,
    saldo: number,
    extrato: Gasto[]
}