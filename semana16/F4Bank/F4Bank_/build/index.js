"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
class UserAccount {
    constructor(balance = 0, cpf, name, age, transactions = []) {
        console.log("Chamando o construtor da classe UserAccount");
        this.balance = balance;
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = transactions;
    }
    getBalance() {
        return this.balance;
    }
    addBalance(value) {
        this.balance += value;
        console.log('Saldo atualizado com sucesso');
    }
    getAge() {
        return this.age;
    }
}
exports.UserAccount = UserAccount;
const conta1 = new UserAccount(0, "1234", "Ivana", 20, []);
conta1.getBalance();
console.log(conta1);
//# sourceMappingURL=index.js.map