import { BaseError } from "./BaseError"

export class EmailInvalido extends BaseError {
    constructor() {
        super("Email inválido!", 404)
    }
}