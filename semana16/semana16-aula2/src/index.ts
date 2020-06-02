import {User} from "./user";
import {Customer} from "./customer";
import {Employee} from "./employee";
import {Seller} from "./seller";

  const user1: User = new User("1234", "user1@labenu.com", "labenauta", "123");
  console.log(`id: ${user1.getId()}, email: ${user1.getEmail()} e name: ${user1.getName()}`);
/*1.
a. Sim. Basta fazer o método getPassword ou fazer um console.log com a instância.
b. Uma única vez porque foi feita apenas uma instância da classe.
*/

const costumer1: Customer = new Customer("123", "costumer1@labenu.com", "Costumer1", "bananinha", "visa");
console.log(costumer1);
/*2.
a. Uma só vez porque há apenas uma instaância.
b. Duas vezes. Uma na instância da classe User e outra quando foi chamada a subclasse Customer.

3. Vou imprimir apenas o que falta. O resto foi impresso na questão 2.*/
console.log(`Total da compra: ${costumer1.purchaseTotal} \n Cartão de crédito: ${costumer1.getCreditCard()}`);
console.log(`A senha é: ${costumer1.getPassword()}`);
/*a. É possível imprimir a senha fazendo um método getPassword.

4. */
console.log(costumer1.introduceYourself());

//5.
console.log(costumer1.introduceYourself());

//6.
const employee1: Employee = new Employee("135", "employee@labenu.com", "Employee", "maxixezinho", new Date("2020/01/01"), 10000);
console.log(employee1);
//a. 3 vezes. 
//b. Todos os dados.

//7.
console.log(employee1.calculateTotalSalary());

//8.
const seller1: Seller = new Seller("123", "donamaria@labenu.com", "Dona Maria", "minhasenha", new Date("2020/02/12"), 1200);
console.log(seller1);
//a. Tudo o que o construtor da classe pai recebe.
//b. Imprime tudo.

//9.
seller1.setSalesQuantity(500);
console.log(`O novo valor é ${seller1.getSalesQuantity()}`);

//10.
const seller2: Seller = new Seller("456", "seuze@labenu.com", "Seu Ze", "kes", new Date("2020/02/12"), 2000);
console.log(seller2.calculateTotalSalary());

//11.
