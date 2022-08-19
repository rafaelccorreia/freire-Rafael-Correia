import { Gasto, Conta } from "../types"

export let contas: Conta[] = [
    {
        nome: "Lavinia Cedro Manso",
        CPF: "111.222.333-45",
        dataDeNascimento: "12/12/1986",
        saldo: 5550,
        extrato: [
            {
                valor: 1000,
                data: "20/02/2022",
                descricao: "Empréstimo pessoal"
            },
            {
                valor: 550,
                data: "05/06/2022",
                descricao: "Investimentos"
            }
        ]
    },
    {
        nome: "Anaísa Calheiros Bragança",
        CPF: "333.111.123-55",
        dataDeNascimento: "28/01/1996",
        saldo: 2500,
        extrato: [
            {
                valor: 2000,
                data: "18/05/2021",
                descricao: "AI Seguros"
            },
            {
                valor: 100,
                data: "05/06/2022",
                descricao: "onshop.com"
            },
            {
                valor: 369,
                data: "25/07/2022",
                descricao: "mercado BR"
            }
        ]
    },
    {
        nome: "Nilson Granja Melancia",
        CPF: "789.951.666-81",
        dataDeNascimento: "30/07/200",
        saldo: 10000,
        extrato: []
    },
    {
        nome: "Katie Toste Mansilha",
        CPF: "498.897.456-13",
        dataDeNascimento: "13/04/1965",
        saldo: 58900,
        extrato: [
            {
                valor: 5000,
                data: "31/06/2022",
                descricao: "Empréstimo pessoal"
            },
            {
                valor: 2000,
                data: "05/06/2022",
                descricao: "BankCorretora"
            },
            {
                valor: 985,
                data: "05/06/2022",
                descricao: "BankCorretora"
            },
            {
                valor: 5000,
                data: "05/06/2022",
                descricao: "AGAutomóveis"
            }
        ]
    },
    {
        nome: "Ilídio Hilário Rua",
        CPF: "654.456.159-78",
        dataDeNascimento: "25/11/1990",
        saldo: 1000,
        extrato: [
            {
                valor: 2000,
                data: "29/10/2021",
                descricao: "CursosTI"
            },
            {
                valor: 100,
                data: "11/06/2021",
                descricao: "shoptech.com"
            },
            {
                valor: 369,
                data: "07/07/2022",
                descricao: "amGomes"
            }
        ]
    }
]