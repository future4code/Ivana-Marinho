export {};

const palavra: string = "eu sou aluna da hamilton";
let palavraInvertida: string = "";

function revertePalavra(palavra: string): string{
    for(let i = palavra.length - 1; i >= 0; i--){
        palavraInvertida += palavra[i];
    }
    return palavraInvertida;
}

console.log(revertePalavra(palavra));