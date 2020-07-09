export {};

let palavra1: string = "Ivana" ;
let palavra2: string = "ivana";


function comparaPalavra(palavra1: string, palavra2: string): boolean{
    palavra1 = palavra1.toUpperCase();
    palavra2 = palavra2.toUpperCase();

    if(palavra1 === palavra2){
        return true;
    }
    return false;
}

console.log(comparaPalavra(palavra1, palavra2));




/*Faça uma função que receba duas strings e devolva se elas são iguais, 
ignorando se os caracteres estão em maiúsculo ou minúsculo. 
Ex.: deve retornar true para as entradas escola e Escola ou escola e EsCoLA*/