import { TimerOptions } from 'timers'
import { connection } from '../index'

export default async function selectAllUsersEx4(offSet:number, order:string, nome?:string, tipo?:string): Promise<any> {

    let result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio
        ORDER BY ${order} DESC
        LIMIT ${offSet}, 5;
    `)

    if(nome && tipo) {
        result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            WHERE name LIKE "${"%" + nome + "%"}" AND type = "${tipo}"
            ORDER BY ${order} DESC
            LIMIT ${offSet}, 5;
        `)
    }
    else if(nome) {
        result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            WHERE name LIKE "${"%" + nome + "%"}"
            ORDER BY ${order} DESC
            LIMIT ${offSet}, 5;
        `)
    } 
    else if(tipo) {
        result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            WHERE type = "${tipo}"
            ORDER BY ${order} DESC
            LIMIT ${offSet}, 5;
        `)
    }

    return result[0]
}