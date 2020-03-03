/* Exercícios de Interpretação de Código

Exercício 1

O código verifica se o número digitado pelo usuário é par ou ímpar utilizando o valor do resto da divisão. Se o resto da divisão por 2 é zero, então é par, caso contrário é ímpar. Dessa forma, se o número for par, imprime: "Passou no teste" e se o número for ímpar, imprime:"Não passou no teste". 
 


Exercício 2

a. Serve para informar ao usuário o preço da fruta que ele inserir.
b. O preço da fruta Maçã é R$ 2.25
c. R$ 24.55
d. Sem o break, ele não para e passa direto para o próximo case ou default que tenha break, nesse caso ele parou no default. A mensagem impressa é: O preço da fruta  Pêra  é  R$  5



Exercício 3

A mensagem do terminal é: Uncaught ReferenceError: mensagem is not defined.
Haverá erro, pois a variável mensagem foi definida dentro do escopo pai e existindo apenas ali dentro. Do jeito que ocódigo foi escrito, apenas os escopos filhos podem ter acesso à variável mensagem. Para corrigir esse erro, seria suficiente declarar a variável fora de qualquer bloco if e else.

*/

/* Exercício de Escrita de Código



Exercício 4 


a. */

let numero1 = Number(prompt("Digite o primeiro número"));
let numero2 = Number(prompt("Digite o segundo número"));

if(numero1 > numero2){
    console.log(numero1 + " " + numero2);
}else{
    console.log(numero2 + " " + numero1);
}
// Se os números forem iguais, eles são mostrados na tela um do lado do outro.


// b.

numero1 = Number(prompt("Digite o primeiro número"));
numero2 = Number(prompt("Digite o segundo número"));
let numero3 = Number(prompt("Digite o terceiro número"));

if((numero3 > numero2) && (numero2 > numero1)){
    console.log(numero3 + " " + numero2 + " " + numero1);
}else if((numero3 > numero1) && (numero1 > numero2)){
    console.log(numero3 + " " + numero1 + " " + numero2);
}else if((numero2 > numero3) && (numero3 > numero1)){
    console.log(numero2 + " " + numero3 + " " + numero1);
}else if((numero2 > numero1) && (numero1 > numero3)){
    console.log(numero2 + " " + numero1 + " " + numero3);
}else if((numero1 > numero3) && (numero3 > numero2)){
    console.log(numero1 + " "+ numero3 + " " + numero2);
}else if((numero1 > numero2) && (numero2 > numero3)){
    console.log(numero1 + " " + numero2 + " " + numero3);
}

// Se os números forem iguais, o programa imprime nada. 


// c.

numero1 = Number(prompt("Digite o primeiro número"));
numero2 = Number(prompt("Digite o segundo número"));

if(numero2 === numero1){
    numero2 = Number(prompt("Os números devem ser diferentes. \n Digite novamente."));
}
    numero3 = Number(prompt("Digite o terceiro número"));
if(numero1 === numero3 || numero2 === numero3){
    numero3 = Number(prompt("Os números devem ser diferentes. \n Digite novamente."));
}
if((numero3 > numero2) && (numero2 > numero1)){
    console.log(numero3 + " " + numero2 + " " + numero1);
}else if((numero3 > numero1) && (numero1 > numero2)){
    console.log(numero3 + " " + numero1 + " " + numero2);
}else if((numero2 > numero3) && (numero3 > numero1)){
    console.log(numero2 + " " + numero3 + " " + numero1);
}else if((numero2 > numero1) && (numero1 > numero3)){
    console.log(numero2 + " " + numero1 + " " + numero3);
}else if((numero1 > numero3) && (numero3 > numero2)){
    console.log(numero1 + " "+ numero3 + " " + numero2);
}else if((numero1 > numero2) && (numero2 > numero3)){
    console.log(numero1 + " " + numero2 + " " + numero3);
}


//Exercício 5


const vertebrado = prompt("Possui coluna vertebral? s/n");

if(vertebrado === "s"){
    let pelos = prompt("Possui pelos? s/n");
    if(pelos === "s"){
        let racional = prompt("É racional? s/n");
        if(racional === "s"){
            console.log("É humano");
        }else{
            console.log("Mamífero não humano");
        }
    }else{
        let penas = prompt("Possui penas? s/n");
        if(penas === "s"){
            console.log("É uma ave");
        }else{
            let terrestre = prompt("É um animal terrestre? s/n");
            if(terrestre === "s"){
                let vidAqua = prompt("Passa parte da vida em ambiente aquático? s/n");
                if(vidAqua === "s"){
                    console.log("É um anfíbio");
                }else{
                    console.log("É um réptil");
                }
            }else{
                console.log("É um peixe");
            }
        }
    }
}else{
    console.log("É invertebrado");
}
