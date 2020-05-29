"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(saldo, cpf, nome) {
        this.saldo = saldo;
        this.cpf = cpf;
        this.nome = nome;
    }
    verificaSaldo() {
        return this.saldo;
    }
    atualizaSaldo(deposito) {
        if (deposito <= 0) {
            throw new Error("O valor deve ser maior que zero!");
        }
        else {
            return this.saldo += deposito;
        }
    }
}
const conta = new Conta(100, 1234, "Ivana");
const novoSaldo = conta.atualizaSaldo(800);
console.log(novoSaldo);
/*
type pessoa = {
    cpf: number,
    nome: string,
    anoDeNascimento: number,
    saldoInicial: number
}

const anoAtual: number = new Date().getFullYear();

const contaDoUsuario: pessoa = {
    cpf: Number(process.argv[2]),
    nome: String(process.argv[3]),
    anoDeNascimento: Number(process.argv[4]),
    saldoInicial: 0
}

const arquivoDeContas: string = "todasAsContas.json";

function criarConta(contaDoUsusario:pessoa): void{
    const idadeDaPessoa = Math.abs(contaDoUsuario.anoDeNascimento - anoAtual);
    if(idadeDaPessoa < 18){
        console.log("A conta não pode ser criada");
    }else{

        try{
            const lerArquivo: Buffer = fs.readFileSync(arquivoDeContas);
            const passaParaString: string = lerArquivo.toString();
            const passaParaObjeto: any = JSON.parse(passaParaString);
            if(passaParaObjeto.find((item:any) => item.cpf === contaDoUsuario.cpf)) {
               
                    console.log("Essa conta já foi criada!");
                }else{
                    passaParaObjeto.push(contaDoUsuario);
                    
                    try{
                        fs.writeFileSync("todasAsContas.json", JSON.stringify(passaParaObjeto));
                    }catch(erro){
                        console.log("Tente de novo!");
                    }
                };

        }catch(erro){
            console.log("Tente mais uma vez!");

        }
    }
};

criarConta(contaDoUsuario);*/ 
