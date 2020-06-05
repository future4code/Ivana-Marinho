import {Pessoa} from "./pessoa";
export class Docente implements Pessoa{
    public especialidade: ESPECIALIDADE[];

    constructor(public id: string, 
        public name: string, 
        public email: string, 
        public dataDeNascimento: moment.Moment,
        especialidade: ESPECIALIDADE[]){}
     
}

export enum ESPECIALIDADE{
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    POO = "POO",
    BACKEND = "BACKEND",
  }
       
