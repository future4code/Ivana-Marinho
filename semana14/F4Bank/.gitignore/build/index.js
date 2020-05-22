"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const anoAtual = new Date().getFullYear();
const contaDoUsuario = {
    cpf: Number(process.argv[2]),
    nome: String(process.argv[3]),
    anoDeNascimento: Number(process.argv[4]),
    saldoInicial: 0
};
const arquivoDeContas = "todasAsContas.json";
function criarConta(contaDoUsusario) {
    const idadeDaPessoa = Math.abs(contaDoUsuario.anoDeNascimento - anoAtual);
    if (idadeDaPessoa < 18) {
        console.log("A conta não pode ser criada");
    }
    else {
        try {
            const lerArquivo = fs.readFileSync(arquivoDeContas);
            const passaParaString = lerArquivo.toString();
            const passaParaObjeto = JSON.parse(passaParaString);
            if (passaParaObjeto.find((item) => item.cpf === contaDoUsuario.cpf)) {
                console.log("Essa conta já foi criada!");
            }
            else {
                passaParaObjeto.push(contaDoUsuario);
                try {
                    fs.writeFileSync("todasAsContas.json", JSON.stringify(passaParaObjeto));
                }
                catch (erro) {
                    console.log("Tente de novo!");
                }
            }
            ;
        }
        catch (erro) {
            console.log("Tente mais uma vez!");
        }
    }
}
;
criarConta(contaDoUsuario);
