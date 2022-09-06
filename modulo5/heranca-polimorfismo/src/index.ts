class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
}

/*
    Exercício 1
    a) Tecnicamente não seria possível, já que não foi criado um método public para acessar a senha que é private
    b) A mensagem foi impressa uma única vez
*/

const user: User = new User("06", "carlos@carl.com", "Carlos", "senhaTeste")
console.log(user.getId(), user.getName(), user.getEmail(), user.password)

