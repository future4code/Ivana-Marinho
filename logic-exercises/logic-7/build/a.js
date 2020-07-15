"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numero = 0;
let resultado = 1;
function fatorial(numero) {
    for (let i = numero; i > 0; i--) {
        resultado *= i;
    }
    return resultado;
}
console.log(fatorial(numero));
//# sourceMappingURL=a.js.map