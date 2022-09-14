type Letras = {
    letra: string,
    valor: number
}

const arrayRomanos: Letras[] = [
    {letra: 'M', valor: 1000},
    {letra: 'CM', valor: 900},
    {letra: 'D', valor: 500},
    {letra: 'CD', valor: 400},
    {letra: 'C', valor: 100},
    {letra: 'XC', valor: 90},
    {letra: 'L', valor: 50},
    {letra: 'XL', valor: 40},
    {letra: 'X', valor: 10},
    {letra: 'IX', valor: 9},
    {letra: 'V', valor: 5},
    {letra: 'IV', valor: 4},
    {letra: 'I', valor: 1}
]

function transformarRomanos(numero: number):string {
    let numeroEmRomano:string = ''
    let numerNormalValorAtual:number = numero

    arrayRomanos.forEach(letraRom => {
        while((numerNormalValorAtual - letraRom.valor) >= 0) {
            numeroEmRomano += letraRom.letra
            numerNormalValorAtual -= letraRom.valor
        }
    })
    
    return numeroEmRomano
}

console.log(transformarRomanos(1990))