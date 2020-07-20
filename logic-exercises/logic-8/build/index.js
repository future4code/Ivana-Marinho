"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numero = 12;
let array = [6, 7, 8];
let novoArray = [];
function completaArray(array, numero) {
    if (numero < array[0]) {
        for (let i = numero; i < array[0]; i++) {
            novoArray.push(i);
        }
        return novoArray.concat(array);
    }
    else if (numero > array[array.length - 1]) {
        for (let i = (array[array.length - 1]) + 1; i <= numero; i++) {
            novoArray.push(i);
        }
        return array.concat(novoArray);
    }
}
console.log(completaArray(array, numero));
//# sourceMappingURL=index.js.map