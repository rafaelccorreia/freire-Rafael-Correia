enum SETORES {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Colaborador = {
    nome: string,
    salario: number,
    setor: SETORES,
    presencial: boolean
}

const colaboradores: Colaborador[] = [
	{ nome: "Marcos", salario: 2500, setor: SETORES.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETORES.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETORES.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETORES.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETORES.MARKETING, presencial: true }
]

function filtrarPessoasEmpresa (listaColaboradores:Colaborador[], setor:SETORES, presencial:boolean): Colaborador[] {
    const listaFiltradaColaboradores: Colaborador[] = listaColaboradores.filter(colaborador => {
        if(colaborador.setor === setor) {
            if(colaborador.presencial === presencial) {
                return colaborador
            }
        }
    })
    return listaFiltradaColaboradores
}

console.log(filtrarPessoasEmpresa(colaboradores, SETORES.MARKETING, true))