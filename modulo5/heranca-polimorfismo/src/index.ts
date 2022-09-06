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

    public introduceYourserlf(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
}

/*
    Exercício 1
    a) Tecnicamente não seria possível, já que não foi criado um método public para acessar a senha que é private
    b) A mensagem foi impressa uma única vez
*/

const user: User = new User("06", "carlos@carl.com", "Carlos", "senhaTeste")
console.log(user.getId(), user.getName(), user.getEmail(), user.password)

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const customer: Customer = new Customer("1", "julia@email.com", "Julia", "senha123", "12345678998711")

/*
    Exercício 2
    a) A mensagem aparece uma vez já que o constructor da classe Customer é chamado ao criar uma instância da classe
    b) A mensagem aparece uma vez pois o constructor da classe User é chamado no "super" dentro do constructor da classe Customer
*/

console.log(customer.getId(), customer.getName(), customer.getEmail(), customer.purchaseTotal, customer.getCreditCard(), customer.password)

/*
    Exercício3
    a) A senha aparece no console, porém não seria possível já que a senha está atrelada a classe User, e não foi criado nenhum método public para acessá-la
*/

// Exercício 4
console.log(customer.introduceYourserlf())