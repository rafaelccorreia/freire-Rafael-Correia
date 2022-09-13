import { BaseError } from "./BaseError"

export class RoleInvalida extends BaseError {
    constructor() {
        super("Valor de role inválido, esperado 'normal' ou 'admin'", 404)
    }
}