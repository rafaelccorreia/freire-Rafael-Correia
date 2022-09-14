/* 
    Exercício 1
    a) O contructor serve para execultar ações ao criar instâncias de uma classe.
    b) A mensagem foi impressa uma vez no terminal.
    c) Criando um método para acessar o valor privado.
*/

type Transaction1 = {
    description: string,
    value: number,
    date: string
}

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description
        this.value = value
        this.date = date
    }

    public getDescription(): string {
        return this.description
    }
    public getValue(): number {
        return this.value
    }
    public getDate(): string {
        return this.date
    }
}

const transactionTest: Transaction = new Transaction("Pagar boleto", 550, "12/12/2021")

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name
    }
    public getAge(): number {
        return this.age
    }
    public getBalance(): number {
        return this.balance
    }
    public getTransactions(): Transaction[] {
        return this.transactions
    }
    public getCpf(): string {
        return this.cpf
    }
    public setTransactions(newTransaction: Transaction): void {
        this.transactions.push(newTransaction)
    }
}

const account1: UserAccount = new UserAccount(
    "55555555565",
    "Rafael",
    23
)

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    public setAccount(newAccount: UserAccount): void {
        this.accounts.push(newAccount)
    }
}

account1.setTransactions(transactionTest)
const bank1: Bank = new Bank([account1])
console.log(bank1)