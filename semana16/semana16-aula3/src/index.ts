import {Client} from "./client";
import {Place} from "./place";
import {Residence} from "./residence";
import {Commerce} from "./commerce";
import {Industry} from "./industry";

const client: Client = {name: "Client", registrationNumber: 40, consumedEnergy: 100,  
    calculateBill: () => {
      return 2;
    }
  }

  console.log(client);
  console.log(client.calculateBill());

  /*1.
  a. Dá para imprimir tudo o que tá dentro do objeto, menos o calculateBill que fiz outro console.log para chamar a função.
  */

  /*2.
  const place = new Place();
  a. Não pode criar uma instância de uma classe abstrata.
  b. Para poder criar instâncias, devemos fazer com que a classe deixe de ser abstrata.

  3.
  1. Fazer com que a classe não seja mais abstrata.
  2. Porque a interface é apenas uma coleção de métodos e atributos. Uma classe abstrata, além de ser muito genérica, aprensenta métodos que poderão sobrescritos por suas subclasses.
  3. Porque ela é muito genérica, muito abrangente.
  */

  const residence1 = new Residence(3, "57000-000");
  console.log(`O CEP é ${residence1.getCep()}`);

  const commerce1 = new Commerce(8, "57000-010");
  console.log(`O CEP é ${commerce1.getCep()}`);

  const industry1 = new Industry(10, "57010-000");
  console.log(`O CEP é ${industry1.getCep()}`);

  /*4.
  a. Propriedades: name, registrationNumber, consumedEnergy, cpf(essas são próprias dessa classe), residentsQuantity, cep (essas duas últimas são herdadas da superclasse).
  Métodos: getCpf() (pois, cpf tem modificador de visibilidade private), calculateBill().
  
  5.
  a. Ambas implementam a interface Client.
  b. ResidentialClient herda de Residence e CommercialClient herda de Commerce. Residence e Commerce herdam de Place, portanto ResidentialClient e CommercialClient herdam atributos e métodos de Place.
  
  6.
  a. Industry. Para poder herdar os atributos e métodos da superclasse.
  b. Client. Para poder implementar tudo o que há nessa interface.
  c. Porque o atributo tem o modificador de visibilidade private e queremos apenas acessá-lo e não mudá-lo.

  7. 
  */






