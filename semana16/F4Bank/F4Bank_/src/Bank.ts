import {UserAccount} from "./index";
import {JSONFileManager} from "./JSONFileManager";

const balance: number = Number(process.argv[2]);
const cpf: string = process.argv[3];
const name: string = process.argv[4];
const age: number = Number(process.argv[5]);

export class Bank {
    private accounts: UserAccount[];
    private fileManager: JSONFileManager;
  
    constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
      this.accounts = accounts;
      this.fileManager = fileManager
    }

    public createAccount(): void {
      const newAccount = new UserAccount(balance, cpf, name, age)

      if(newAccount.getAge() >= 18){
          this.accounts.push(newAccount);

          const file = new JSONFileManager("counts.json");

          file.writeObjectToFile(this.accounts);
          console.log("Conta criada com sucesso");
      }else{
      console.log("Você não pode criar conta sozinho.")
      }
}
  /*
    public getAllAccounts(): UserAccount[] {
      //lógica de pegar todas as contas aqui
    }
  
    public getAccountByCpf(): UserAccount {
      // lógica de pegar conta por cpf aqui
    
  }*/
}  

const newAccount = new UserAccount(balance, cpf, name, age);
console.log(newAccount);