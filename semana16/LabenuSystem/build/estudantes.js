"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudantes = void 0;
const moment = require("moment");
class Estudantes {
    constructor(id, name, email, dataDeNascimento, hobbies) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.dataDeNascimento = dataDeNascimento;
        this.id = id;
        this.name = name;
        this.email = email;
        this.dataDeNascimento = dataDeNascimento;
        this.hobbies = hobbies;
    }
    idade(id) {
        if (this.id === id) {
            return moment().diff(this.dataDeNascimento, "years");
        }
        else {
            return "não há estudante cadastrado.";
        }
    }
}
exports.Estudantes = Estudantes;
//# sourceMappingURL=estudantes.js.map