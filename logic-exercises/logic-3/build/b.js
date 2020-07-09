"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let palavra1 = "Ivana";
let palavra2 = "ivana";
function comparaPalavra(palavra1, palavra2) {
    palavra2 = palavra2.toUpperCase();
    if (palavra1 === palavra2) {
        return true;
    }
    return false;
}
console.log(comparaPalavra(palavra1, palavra2));
//# sourceMappingURL=b.js.map