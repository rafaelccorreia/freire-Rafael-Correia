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

// DESAFIOS EXERCÍCIO 6 e 11
class Employee extends User {
    protected admissionDate: string
    protected baseSalary: number
    static BENEFITS_VALUE: number = 400

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        admissionDate: string,
        baseSalary: number
    ) {
        console.log("Chamando constructor da classe Employee")
        super(id, name, email, password)
        this.admissionDate = admissionDate
        this.baseSalary = baseSalary
    }

    public getAdmissionDate(): string {
        return this.admissionDate
    }

    public getBaseSalary(): number {
        return this.baseSalary
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE
    }
}

const employee: Employee = new Employee('98', 'Miles Halter', 'halt@gmail.com', 'senha1234', '2022-08-28', 2500)
// Exercício 7
console.log(employee.calculateTotalSalary())

// Exercício 8 E 11
class Seller extends Employee {
    private salesQuantity: number = 0
    static SELLING_COMMISSION: number = 100

    public getSalesQuantity(): number {
        return this.salesQuantity
    }

    public setSalesQuantity(newValue: number): void {
        this.salesQuantity = newValue
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE + this.salesQuantity * Seller.SELLING_COMMISSION
    }
}

const seller: Seller = new Seller('65479', 'Anivia', 'nivia@gmail.com', 'senha1243', '2022-01-25', 2000)

// Exercício 9
seller.setSalesQuantity(3)
console.log(seller.getId(), seller.getName(), seller.getEmail(), seller.getAdmissionDate(), seller.getBaseSalary(), seller.getSalesQuantity())

// Exercício 10
// public calculateTotalSalary(): number {
//     return this.baseSalary + 400 + this.salesQuantity * 100
// }

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

// Exercício 4
class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep);
    }

    public getCpf(): string {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}

// Exercício 5
class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep);
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }

    public getCnpj(): string {
        return this.cnpj;
    }
}

// Exercício 6
class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private insdustryNumber: string, // tanto faz ser string ou number
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep);
    }

    public getIndustryNumber(): string {
        return this.insdustryNumber;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}

// Desafios Exercício 7
class ClientManager {
    private clients: Client[] = []

    public getClientsQuantity(): number {
        return this.clients.length
    }

    public registerClient(client: Client): void {
        this.clients.push(client)
    }

    public calculateTotalIncome(): number {
        let total: number = 0;
        this.clients.forEach( (client) => {
            total += client.calculateBill()
        });
        return total
    }

    public deleteUser(registrationNumber: number) : void {
        let registrationIndex = undefined

        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].registrationNumber === registrationNumber) {
                registrationIndex = i
            }
        }

        if (registrationIndex !== undefined) {
            this.clients.splice(registrationIndex, 1)
        }
    }
}

const clientManager = new ClientManager()

const residentialClient = new ResidentialClient('Paulo', 98, 20, '65478931254', 2, '65478987')
clientManager.registerClient(residentialClient)

const commercialClient = new CommercialClient('Carla', 65, 85, '1236531254', 4, '987415632')
clientManager.registerClient(commercialClient)

const industrialClient = new IndustrialClient('Moana', 64, 65, '9753248975', 1, '759542324')
clientManager.registerClient(industrialClient)