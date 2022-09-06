/////////////////// HERANÇA

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

// Exercício 4 e 5
console.log(customer.introduceYourserlf())

//////////////////////// POLIMORFISMO

export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const client: Client = {
    name: "Ronaldo",
    registrationNumber: 2,
    consumedEnergy: 150,

    calculateBill: () => {
        return 2
    }
}

console.log(client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill())

/*
    Exercício 1
    a) Todas as propriedades foram impressas
*/

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

// const place: Place = new Place()
/*
    Exercício 2
    a) "Não pode criar uma instância de uma classe abstrata"
    b) "Retirar o abstract e transformar em uma classe padrão"
*/

export class Residence extends Place {
    constructor(
        private dwellersQuantity: number,

        cep: string
    ) {
        super(cep);
    }

    public getDwellersQuantity(): number {
        return this.dwellersQuantity
    }
}

export class Commerce extends Place {
    constructor(
        private floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity;
    }
}

export class Industry extends Place {
    constructor(
        private machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local

        cep: string
    ) {
        super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity;
    }
}
// Exercício 3
const residence: Residence = new Residence(5, "45678-789")
const commerce: Commerce = new Commerce(3, "45698-123")
const industry: Industry = new Industry(35, "32145-456")

console.log(residence.getCep(), commerce.getCep(), industry.getCep())

