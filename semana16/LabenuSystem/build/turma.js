"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turma = void 0;
const fileManager_1 = require("./fileManager");
class Turma {
    constructor(id, dataDeInicio, dataDeTermino, listaDeDocentes = [], listaDeEstudantes = [], moduloAtual) {
        this.id = id;
        this.dataDeInicio = dataDeInicio;
        this.dataDeTermino = dataDeTermino;
        this.listaDeDocentes = listaDeDocentes;
        this.listaDeEstudantes = listaDeEstudantes;
        this.moduloAtual = moduloAtual;
        this.name = "";
    }
    getId() {
        return this.id;
    }
    getName(name) {
        return this.name;
    }
    getDataDeInicio() {
        return this.dataDeInicio;
    }
    getDataDeTermino() {
        return this.dataDeTermino;
    }
    getModuloAtual() {
        if (this.moduloAtual) {
            return this.moduloAtual;
        }
        else {
            return undefined;
        }
    }
    todosDocentes() {
        const fileManager = new fileManager_1.FileManager("todosDocentes.json");
        const docentes = fileManager.readFile();
        return docentes;
    }
    adicionarDocente(docente) {
        const verificaDocente = this.listaDeDocentes.find((doc) => {
            return doc.id === docente.id;
        });
        if (verificaDocente) {
            console.log("O estudante já existe!");
        }
        else {
            try {
                this.listaDeDocentes = this.todosDocentes();
                this.listaDeDocentes.push(docente);
                const fileManager = new fileManager_1.FileManager("todosDocentes.json");
                fileManager.writeFile(this.listaDeDocentes);
            }
            catch (erro) {
                console.log("Não deu certo!");
            }
        }
    }
    todosEstudantes() {
        const fileManager = new fileManager_1.FileManager("todosEstudantes.json");
        const estudantes = fileManager.readFile();
        return estudantes;
    }
    adicionarEstudante(estudante) {
        try {
            this.listaDeEstudantes = this.todosEstudantes();
            this.listaDeEstudantes.push(estudante);
            const fileManager = new fileManager_1.FileManager("todosEstudantes.json");
            fileManager.writeFile(this.listaDeEstudantes);
            console.log("Estudante criado");
        }
        catch (erro) {
            console.log("Não deu certo!");
        }
    }
    setName(name) {
        this.name = name;
    }
}
exports.Turma = Turma;
//# sourceMappingURL=turma.js.map