import {Turma} from "./turma";
import {Docente} from "./docente";
import {Estudantes} from "./estudantes";

export class TurmaNoturna extends Turma{
    constructor(
        name: string,
        id: string,
        dataDeInicio: moment.Moment,
        dataDeTermino: moment.Moment,
        listaDeDocentes: Docente[] = [],
        listaDeEstudantes: Estudantes[] = [],
        moduloAtual?: number | undefined) {

        super(id, dataDeInicio, dataDeTermino, listaDeDocentes, listaDeEstudantes);
    }

    public setName(name: string) {
        if (name.indexOf("-na-night") !== -1) {
          super.setName(name);
        }else{
            console.log("O nome da turma precisa ser seguido de -na-night");
        }
      }
}
