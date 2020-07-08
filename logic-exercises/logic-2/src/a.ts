const palavra: string = "ivana marinho";
let quantidade: number = 0;
let primeiro: string;
let ultimo: string;

function informacoesDaString(palavra: string): Object{
    quantidade = palavra.length;
    primeiro = palavra.charAt(0);
    ultimo = palavra[palavra.length-1];
    
    return {quantidade: quantidade, primeiro: primeiro, ultimo: ultimo};
}

console.log(informacoesDaString(palavra));





/*Faça uma função que receba uma string e devolva um objeto com as informações: 
quantos caracteres a string possui, 
qual seu primeiro caracter e qual seu último caracter*/