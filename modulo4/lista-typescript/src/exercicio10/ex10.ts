function validarCPF (cpf:string):boolean {
    const cpfArray: string[] = cpf.replace(/\./g, '').replace(/\-/g, '').split('')
    let primeiroDigito:number = 0
    let segundoDigito:number = 0

    //calcula o primeiro dígito
    let indexS:number = 10 
    for (let i = 0; i < 9; i++) {
        primeiroDigito += (Number(cpfArray[i]) * indexS)
        indexS--
    }
    primeiroDigito = 11 - (primeiroDigito % 11)

    //calcula o segundo dígito
    let indexS2:number = 11
    for (let index = 0; index < 10; index++) {
        segundoDigito += (Number(cpfArray[index]) * indexS2)
        indexS2--
    }
    segundoDigito = 11 - (segundoDigito % 11)

    //verifica caso especial
    let quantidadeRepeticoes:number = 0
    cpfArray.forEach(num => {
        if(num === cpfArray[0]){
            quantidadeRepeticoes++
        }
    })

    // faz os retornos de acordo
    if(quantidadeRepeticoes === 11) {
        return false
    }
    else if(primeiroDigito === Number(cpfArray[9]) && segundoDigito === Number(cpfArray[10])) {
        return true
    } else {
        return false
    }

}

console.log(validarCPF('111.111.111-11'))