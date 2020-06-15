import {Docente} from "./docente";
import {Estudantes} from "./estudantes";
import {FileManager} from "./fileManager";
import { fileURLToPath } from "url";

export abstract class Turma{
    private name: string = "";

    constructor(
        private id: string, 
        private dataDeInicio: moment.Moment,
        private dataDeTermino: moment.Moment,
        private listaDeDocentes: Docente[] =[],
        private listaDeEstudantes: Estudantes[] = [],
        private moduloAtual?: number | undefined){

        }
        public getId(): string {
            return this.id;
          }
        
          public getName(name: string): string {
            return this.name;
          }
        
          public getDataDeInicio(): moment.Moment {
            return this.dataDeInicio;
          }
        
          public getDataDeTermino(): moment.Moment {
            return this.dataDeTermino;
          }
        
          public getModuloAtual(): number | undefined {
            if(this.moduloAtual) {
              return this.moduloAtual
            } else {
              return undefined
            }
          }

          public todosDocentes(): Docente[]{
            const fileManager = new FileManager("todosDocentes.json");
            const docentes = fileManager.readFile();
            return docentes;
          }
        
          public adicionarDocente(docente: Docente): void {
            const verificaDocente = this.listaDeDocentes.find((doc) => {
              return doc.id === docente.id 
            })
            if(verificaDocente){
              console.log("O estudante já existe!");
            }else{
            try{
              this.listaDeDocentes = this.todosDocentes();
              this.listaDeDocentes.push(docente);
              const fileManager = new FileManager("todosDocentes.json");
              fileManager.writeFile(this.listaDeDocentes);
            }catch(erro){
              console.log("Não deu certo!");
            }
            }
          }

          public todosEstudantes(): Estudantes[]{
            const fileManager = new FileManager("todosEstudantes.json");
            const estudantes = fileManager.readFile();
            return estudantes;
          }
        
          public adicionarEstudante(estudante: Estudantes): void {
           try{
              this.listaDeEstudantes = this.todosEstudantes();
              this.listaDeEstudantes.push(estudante);
              const fileManager = new FileManager("todosEstudantes.json");
              fileManager.writeFile(this.listaDeEstudantes);
              console.log("Estudante criado");
            }catch(erro){
              console.log("Não deu certo!");
            }
          }
                    
          public setName(name: string) {
            this.name = name;
          }
        }



