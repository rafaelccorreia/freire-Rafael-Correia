type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const listaClientes: Cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function identificarNegativos (listaDeClientes:Cliente[]): Cliente[] {
    let debitosCliente: number
    let diferencaSaldo: number
    
    const listaFiltradaNegativos: Cliente[] = listaClientes.filter(cliente => {

        if(cliente.debitos.length > 0) {
            debitosCliente = cliente.debitos.reduce((total, atual) => total + atual)
        } else {
            debitosCliente = 0
        }

        diferencaSaldo = cliente.saldoTotal - debitosCliente
        if(diferencaSaldo < 0) {
            cliente.debitos = []
            cliente.saldoTotal = diferencaSaldo
            return cliente
        }
    })

    return listaFiltradaNegativos
}

console.log(identificarNegativos(listaClientes))