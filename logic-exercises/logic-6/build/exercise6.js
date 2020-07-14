"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const palavra = "eu sou aluna da hamilton";
let palavraInvertida = "";
function revertePalavra(palavra) {
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }
    return palavraInvertida;
}
console.log(revertePalavra(palavra));
//# sourceMappingURL=exercise6.js.map