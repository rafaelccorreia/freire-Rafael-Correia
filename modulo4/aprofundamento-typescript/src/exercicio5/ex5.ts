type Consulta = {
    nome: string,
    idade: number,
    dataDaConsulta: string
}

const listaDeConsultas: Consulta[] = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" },
    { nome: "Alan", idade: 23, dataDaConsulta: "08/09/2022"}
]

function ordernarLista (listaConsultas: Consulta[]) {
    const novaLista: Consulta[] = listaConsultas.sort(
        (a:Consulta , b:Consulta): number => {
            return (a.nome < b.nome) ? -1 : 1
        }
    )
    return novaLista
}

console.log(ordernarLista(listaDeConsultas))