const arrayDeNumeros = [2, 5, 9, 10, 1, 99];
let soma = 0, multiplicacao = 1;
function informacoes(arrayDeNumeros) {
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        soma += arrayDeNumeros[i];
        multiplicacao *= arrayDeNumeros[i];
    }
    return { soma: soma, quantidade: arrayDeNumeros.length, multiplicacao: multiplicacao };
}
console.log(informacoes(arrayDeNumeros));
//# sourceMappingURL=exercicio1A.js.map