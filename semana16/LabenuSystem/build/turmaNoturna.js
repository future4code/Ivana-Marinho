"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurmaNoturna = void 0;
const turma_1 = require("./turma");
class TurmaNoturna extends turma_1.Turma {
    constructor(name, id, dataDeInicio, dataDeTermino, listaDeDocentes = [], listaDeEstudantes = [], moduloAtual) {
        super(id, dataDeInicio, dataDeTermino, listaDeDocentes, listaDeEstudantes);
    }
    setName(name) {
        if (name.indexOf("-na-night") !== -1) {
            super.setName(name);
        }
        else {
            console.log("O nome da turma precisa ser seguido de -na-night");
        }
    }
}
exports.TurmaNoturna = TurmaNoturna;
//# sourceMappingURL=turmaNoturna.js.map