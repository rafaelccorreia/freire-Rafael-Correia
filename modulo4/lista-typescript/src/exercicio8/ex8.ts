// AS DATAS PRECISAM SER PASSADAS NO FORMATO "MM/DD/AAAA"

function validarCarteira (dataNascimento:string, dataEmissao:string) :boolean {
    const dataNascimentoConvertida:Date = new Date(dataNascimento)
    const dataEmissaoConvertida:Date = new Date(dataEmissao)
    const dataAtual:Date = new Date()

    let idadeUsuarioMili = Math.abs(dataAtual.getTime() - dataNascimentoConvertida.getTime())
    let idadeUsuario = Math.ceil(idadeUsuarioMili / (1000 * 60 * 60 * 24 * 30.5 * 12))

    let tempoDesdeEmissaoMili = Math.abs(dataAtual.getTime() - dataEmissaoConvertida.getTime())
    let tempoDesdeEmissao = Math.ceil(tempoDesdeEmissaoMili / (1000 * 60 * 60 * 24 * 30.5 * 12))
    
    if(idadeUsuario <= 20 && tempoDesdeEmissao >= 5) {
        return true
    } 
    else if(idadeUsuario <= 50 && tempoDesdeEmissao >= 10) {
        return true
    }
    else if(tempoDesdeEmissao >= 15) {
        return true
    }
    else {
        return false
    }
}

console.log(validarCarteira('07/28/1999', '12/12/2013'))