"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const palavra = "Iv4n4";
const regex = /[0-9]/;
function contemNumero(palavra) {
    if (regex.test(palavra)) {
        return true;
    }
    return false;
}
console.log(contemNumero(palavra));
//# sourceMappingURL=a.js.map