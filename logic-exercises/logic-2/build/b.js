const nome = "ivana marinho";
let arrayDeLetras = [];
function arrayDeString(nome) {
    for (let i = 0; i < nome.length; i++) {
        arrayDeLetras.push(nome.charAt(i));
    }
    return arrayDeLetras;
}
console.log(arrayDeString(nome));
//# sourceMappingURL=b.js.map