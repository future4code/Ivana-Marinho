export {};

const numero: number = 0;
let resultado: number = 1;

function fatorial(numero: number): number{
    for(let i = numero; i > 0; i--){
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(numero));