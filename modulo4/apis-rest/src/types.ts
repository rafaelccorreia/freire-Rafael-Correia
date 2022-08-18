export type User = {
    id: number,
    name: string,
    email: string,
    type: "NORMAL" | "ADMIN",
    age: number
}