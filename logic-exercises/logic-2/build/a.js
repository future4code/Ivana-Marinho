const palavra = "ivana marinho";
let quantidade = 0;
let primeiro;
let ultimo;
function informacoesDaString(palavra) {
    quantidade = palavra.length;
    primeiro = palavra.charAt(0);
    ultimo = palavra[palavra.length - 1];
    return { quantidade: quantidade, primeiro: primeiro, ultimo: ultimo };
}
console.log(informacoesDaString(palavra));
//# sourceMappingURL=a.js.map