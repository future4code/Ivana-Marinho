import { Turma } from "./turma";
import { Docente } from "./docente";
import { Estudantes } from "./estudantes";

export class TurmaIntegral extends Turma {

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
}