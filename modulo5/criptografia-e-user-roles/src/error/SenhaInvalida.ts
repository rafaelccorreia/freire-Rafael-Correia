import { BaseError } from "./BaseError"

export class SenhaInvalida extends BaseError {
    constructor() {
        super("Senha inválida!", 404)
    }
}