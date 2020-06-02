/*Execícios
1. O construtor serve para obrigar a pessoa que está instanciando a classe a fornecer os valores passados como parâmetros no construtor.
Chamamos o construtor no momento da instanciação da classe.

2. Aparece uma vez, pois só há uma única instância da classe.

3. Através dos métodos getters e setters.

4. Chamando o método conta1.getBalance(); dentro de um console.log.

*/

import {Transaction} from "./Transaction";
export class UserAccount {
    private balance: number;
    private cpf: string;
    private name: string;
    private age: number;
    private transactions: Transaction[];
  
    constructor(
       balance: number = 0,
       cpf: string,
       name: string,
       age: number,
       transactions: Transaction[] = []) {
  
    console.log("Chamando o construtor da classe UserAccount")
      this.balance = balance;
      this.cpf = cpf;
      this.name = name;
      this.age = age;
      this.transactions = transactions
    }
    public getBalance(): number {
        return this.balance;
    }
    
    public addBalance(value: number): void {
        this.balance+=value; 
          console.log('Saldo atualizado com sucesso');
        }

    public getAge(): number {
        return this.age;
    }
    
    }

    const conta1: UserAccount = new UserAccount(0, "1234", "Ivana", 20, []);
    conta1.getBalance();
    console.log(conta1);