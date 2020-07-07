const nome: string = "ivana marinho";
let arrayDeLetras: Array<string> = [];

function arrayDeString(nome: string): Array<string>{
    for(let i = 0; i < nome.length; i++){
        arrayDeLetras.push(nome.charAt(i));
    }

    return arrayDeLetras;
}

console.log(arrayDeString(nome));

