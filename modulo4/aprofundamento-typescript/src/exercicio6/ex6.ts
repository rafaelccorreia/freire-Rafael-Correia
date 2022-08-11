enum IdadeHistorica {
    PREHISTORIA = 'Pré-história',
    IDADEANTIGA = 'Idade Antiga',
    IDADEMEDIA = 'Idade Média',
    IDADEMODERNA = 'Idade Moderna',
    IDADECONTEMPORANEA = 'Idade Comtemporânea'
}

function DefinirIdadeHistorica (ano:number, sigla:string ) {
    if(sigla === 'AC' && ano > 0) {
        if(ano > 4000) {
            return IdadeHistorica.PREHISTORIA
        } else {
            return IdadeHistorica.IDADEANTIGA
        }
    } else if(ano > 0) {
        if(ano < 476) {
            return IdadeHistorica.IDADEANTIGA
        } else if(ano < 1453) {
            return IdadeHistorica.IDADEMEDIA
        } else if(ano < 1789) {
            return IdadeHistorica.IDADEMODERNA
        } else {
            return IdadeHistorica.IDADECONTEMPORANEA
        }
    } else {
        console.log('Valores inválidos')
    }
}

console.log(DefinirIdadeHistorica(450, "DC"))