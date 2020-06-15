import {Pessoa} from "./pessoa";
import * as moment from "moment";
export class Estudantes implements Pessoa{
      public hobbies: string[];
    estudante1: Estudantes;
    
    constructor(public id: string, 
        public name: string,
        public email: string, 
        public dataDeNascimento: moment.Moment, 
        hobbies: string[]){

        this.id = id;
        this.name = name;
        this.email = email;
        this.dataDeNascimento= dataDeNascimento;
        this.hobbies = hobbies;    
    }

    public idade(id: string): any{
        if(this.id === id){
            return moment().diff(this.dataDeNascimento, "years");
        }else{
            return "não há estudante cadastrado."
        }
    }

    
}