"use strict";
const operação = process.argv[2];
const numeroA = Number(process.argv[3]);
const numeroB = Number(process.argv[4]);
function calculos(operação, numeroA, numeroB) {
    switch (operação) {
        case "soma":
            return numeroA + numeroB;
        case "subtração":
            return numeroA - numeroB;
        case "multiplicação":
            return numeroA * numeroB;
        case "divisão":
            return numeroA / numeroB;
        default:
            return "Operação inválida!";
    }
}
console.log(calculos(operação, numeroA, numeroB));
