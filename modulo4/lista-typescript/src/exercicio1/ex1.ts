function formatarGreeting (nome:string, data:string): string {
    let dataArray: string[] = data.split('')
    let dia:string = dataArray[0] + dataArray[1]
    let mes:string = dataArray[3] + dataArray[4]
    let ano:string = dataArray[6] + dataArray[7] + dataArray[8] + dataArray[9]
    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano de ${ano}`
}

console.log(formatarGreeting('Rafael', '28/07/1999'))