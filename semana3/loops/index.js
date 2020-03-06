/* 
Questão 1

O programa está somando os números de 0 a 14. O resultado é 105.


Questão 2
a. Insere no array NovaLista os múltiplos de 5.
b. [10, 15, 25, 30]
c. Se o valor da variável numero fosse 3, os valores múltiplos de 3 seriam mostrados na tela: [12, 15, 18, 21, 27, 30].
   Se o valor da variável numero fosse 4, os valores múltiplos de 4 seriam mostrados na tela: [12].
*/

// Desafio 1
/*
0
00
000
0000
*/


// Exercício 3 

// Resposta item a // repito o comando de comantário só para deixar organizado

let arrayOriginal = [];
let menorNumero = Number.MIN_VALUE;
let maiorNumero = Number.MAX_VALUE;
let maiorValorArrayOriginal = 0;
let menorValorArrayOriginal = 0;
for(let i = 0; i < 5; i++){
    arrayOriginal[i] = Number(prompt("Digite um número"));
    if(arrayOriginal[i] > menorNumero){
        menorNumero = arrayOriginal[i];
        maiorValorArrayOriginal = arrayOriginal[i];
    }
}
    for(let i = 0; i < 5; i++){
        if(arrayOriginal[i] < maiorNumero){
        maiorNumero = arrayOriginal[i];
        menorValorArrayOriginal = arrayOriginal[i];
    }
}
console.log("O maior número é " + maiorValorArrayOriginal + " e o menor é " + menorValorArrayOriginal);
//console.log("Os valores do arrayOriginal são: ", arrayOriginal); para saber quais valores foram digitados


// Resposta item b.

let novoArray = [];
for(let i = 0; i < arrayOriginal.length; i++){
    let divisao = arrayOriginal[i] / 10;
    novoArray.push(divisao);
}
console.log(novoArray);

// Resposta item c

let pares;
let novoArray2 = [];
for(let item of arrayOriginal){
    if(item%2 === 0){
        novoArray2.push(item);
    }
}
console.log(novoArray2);


// Resposta item c

let arrayString = [];
let valor;
for(let i = 0; i < 12; i++){
    valor = Number(prompt("Digite um número"));
    arrayString.push(valor);
    console.log('O elemento do índex', i, ' é ', valor);
}


// DESAFIO 2

let tentativas = 0;
const numeroEscolhido = Number(prompt("Escolha seu número"));
console.log("Vamos jogar!");
let chute = Number(prompt("Chute um número"));
while(chute !== numeroEscolhido){
if(chute > numeroEscolhido){
    console.log("O número chutado foi ", chute);
    console.log("Errrrrou, é menor");
    tentativas++;
    chute = Number(prompt("Chute outro número"));
}else if(chute < numeroEscolhido){
    console.log("O número chutado foi ", chute);
    console.log("Errrrrou, é maior");
    tentativas++;
    chute = Number(prompt("Chute outro número"));
}
}
if(chute === numeroEscolhido){
    tentativas++; // conta a tentativa se acertar
    console.log("Acertou!!!");
    console.log("O número de tentativas foi", tentativas);
}


// DESAFIO3

let tentativas2 = 0;
const numeroEscolhido2 = Math.floor((Math.random() * 10) + 1);
// console.log(numeroEscolhido2); só para testar se acertei mesmo
console.log("Vamos jogar!");
let chute2 = Number(prompt("Chute um número"));
while(chute2 !== numeroEscolhido2){
if(chute2 > numeroEscolhido2){
    console.log("O número chutado foi ", chute2);
    console.log("Errrrrou, é menor");
    tentativas2++;
    chute2 = Number(prompt("Chute outro número"));
}else if(chute2 < numeroEscolhido2){
    console.log("O número chutado foi ", chute2);
    console.log("Errrrrou, é maior");
    tentativas2++;
    chute2 = Number(prompt("Chute outro número"));
}
}
if(chute2 === numeroEscolhido2){
    tentativas2++; // conta a tentativa se acertar
    console.log("Acertou!!!");
    console.log("O número de tentativas foi", tentativas2);
}
/* Para alterar e receber um número aleatório, é suficiente colocar a variável numeroEscolhido2 para receber a função Math.floor((Math.ramdom()*10)+ 1)
Foi uma aleração simples, sem dificuldades*/
