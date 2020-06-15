import * as moment from "moment";
import { Estudantes } from "./estudantes";
import { Docente } from "./docente";
import {ESPECIALIDADE} from "./docente";
import { TurmaIntegral } from "./turmaIntegral";
import { TurmaNoturna } from "./turmaNoturna";

const estudante1: Estudantes = new Estudantes("123", "Estudante1", "estudante1@labenu.com.br", moment('20/01/1999', "DD/MM/YYYY"), ["ler", "assistir filmes de terror"]);
console.log(estudante1);

const estudante2: Estudantes = new Estudantes("999", "Estudante2", "estudante2@labenu.com.br", moment("02/03/2000", "DD/MM/YYYY"), ["jogar sinuca"]);
console.log(estudante2);

const docente1: Docente = new Docente("456", "Docente1", "docente1@labenu.com.br", moment("10/10/1974", "DD/MM/YYYY"),[ESPECIALIDADE.REACT, ESPECIALIDADE.REDUX, ESPECIALIDADE.POO]);
console.log(docente1);

const docente2: Docente = new Docente("1213", "Docente2", "docente2@labenu.com.br", moment("10/04/1980", "DD/MM/YYYY"), [ESPECIALIDADE.BACKEND, ESPECIALIDADE.TYPESCRIPT]);
console.log(docente2);

const docente3: Docente = new Docente("5958", "Docente3", "docente3@labenu.com.br", moment("09/01/1985", "DD/MM/YYYY"), [ESPECIALIDADE.BACKEND, ESPECIALIDADE.POO]);
console.log(docente3);

const docente4: Docente = new Docente("3137", "Docente4", "docente4@labenu.com.br", moment("11/02/1995", "DD/MM/YYYY"), [ESPECIALIDADE.CSS, ESPECIALIDADE.TESTES]);
console.log(docente4);

const turmaIntegral1: TurmaIntegral = new TurmaIntegral("Turma1", "789", moment("10/02/2020", "DD/MM/YYYY"), moment("10/08/2020", "DD/MM/YYYY"), 
[docente1], [estudante1], 5);
console.log(turmaIntegral1);

const turmaIntegral2: TurmaIntegral = new TurmaIntegral("Turma2", "101112", moment("10/03/2020", "DD/MM/YYYY"), moment("10/09/2020", "DD/MM/YYYY"),
[docente1], [estudante2], 3);

console.log(estudante1.idade("123"));
console.log(estudante2.idade("555"));

turmaIntegral1.adicionarEstudante(estudante1);
turmaIntegral1.adicionarEstudante(estudante2);

const turmaNoturna1: TurmaNoturna = new TurmaNoturna("Turma1-na-night", "1417", moment("02/06/1992", "DD/MM/YYYY"), moment("10/12/2020", "DD/MM/YYYY"),
[docente4], [estudante1], 4);

turmaNoturna1.setName("TurmaNoturna1-na-night");
console.log(turmaNoturna1);
