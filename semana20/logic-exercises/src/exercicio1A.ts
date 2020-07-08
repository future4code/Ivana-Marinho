const arrayDeNumeros:Array<number> = [2, 5, 9, 10, 1, 99];
let soma = 0, multiplicacao = 1;

function informacoes(arrayDeNumeros:Array<number>): Object{
    for(let i = 0; i < arrayDeNumeros.length; i++){
        soma += arrayDeNumeros[i];
        multiplicacao *= arrayDeNumeros[i];    
    }
    return {soma: soma, quantidade: arrayDeNumeros.length, multiplicacao: multiplicacao}
}

console.log(informacoes(arrayDeNumeros));