"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurmaIntegral = void 0;
const turma_1 = require("./turma");
class TurmaIntegral extends turma_1.Turma {
    constructor(name, id, dataDeInicio, dataDeTermino, listaDeDocentes = [], listaDeEstudantes = [], moduloAtual) {
        super(id, dataDeInicio, dataDeTermino, listaDeDocentes, listaDeEstudantes);
    }
}
exports.TurmaIntegral = TurmaIntegral;
//# sourceMappingURL=turmaIntegral.js.map