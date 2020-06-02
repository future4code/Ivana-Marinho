"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const index_1 = require("./index");
const JSONFileManager_1 = require("./JSONFileManager");
const balance = Number(process.argv[2]);
const cpf = process.argv[3];
const name = process.argv[4];
const age = Number(process.argv[5]);
class Bank {
    constructor(accounts, fileManager) {
        this.accounts = accounts;
        this.fileManager = fileManager;
    }
    createAccount() {
        const newAccount = new index_1.UserAccount(balance, cpf, name, age);
        if (newAccount.getAge() >= 18) {
            this.accounts.push(newAccount);
            const file = new JSONFileManager_1.JSONFileManager("counts.json");
            file.writeObjectToFile(this.accounts);
            console.log("Conta criada com sucesso");
        }
        else {
            console.log("Você não pode criar conta sozinho.");
        }
    }
}
exports.Bank = Bank;
const newAccount = new index_1.UserAccount(balance, cpf, name, age);
console.log(newAccount);
//# sourceMappingURL=Bank.js.map