import { v4 } from "uuid"

export function gerarId(): string {
    return v4()
}