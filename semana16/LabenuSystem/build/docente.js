"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESPECIALIDADE = exports.Docente = void 0;
class Docente {
    constructor(id, name, email, dataDeNascimento, especialidade) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.dataDeNascimento = dataDeNascimento;
    }
}
exports.Docente = Docente;
var ESPECIALIDADE;
(function (ESPECIALIDADE) {
    ESPECIALIDADE["REACT"] = "REACT";
    ESPECIALIDADE["REDUX"] = "REDUX";
    ESPECIALIDADE["CSS"] = "CSS";
    ESPECIALIDADE["TESTES"] = "TESTES";
    ESPECIALIDADE["TYPESCRIPT"] = "TYPESCRIPT";
    ESPECIALIDADE["POO"] = "POO";
    ESPECIALIDADE["BACKEND"] = "BACKEND";
})(ESPECIALIDADE = exports.ESPECIALIDADE || (exports.ESPECIALIDADE = {}));
//# sourceMappingURL=docente.js.map