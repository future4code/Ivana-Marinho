/* Exercícios de Interpretação

Questão 1

const bool1 = true; //true
const bool2 = false; //false
const bool3 = !bool2; //true

let resultado = bool1 && bool2 &&  bool3;
console.log("a. ", resultado); 
// a. false

resultado = (bool2 || bool1) && !bool3;
console.log("b. ", resultado); 
//b. false

resultado = !resultado && (bool1 || bool1);
console.log("c. ", resultado); 
// c. true

resultado = (resultado && (!bool1 || bool2)) && !bool3;
console.log("d. ", resultado);
// d. false

console.log("e. ", typeof resultado); 
// e. boolean


// Questão 2


a. Array é um conjunto de elementos, uma lista de elementos.
b. O índice inicial de um array é zero.
c. Para determinar o tamanho de um array, é necessário usar o seguinte comando: nomeDoArray.length. 
d.

let array
console.log('I. ', array) 
// I. undefined

array = null
console.log('II. ', array) 
// II. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length) 
// III. 11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1]) 
// IV. 3 e 4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)
// V. 19 e 9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i]) 
// VI. 3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC) 
// VII. 1
*/



// Exercício de escrita de código 

// Questão 1

let letraA = (77 - 32) * 5/9 + 273.15;
console.log("A temperatura é de " + letraA + "K.");

let letraB = (80) * 9/5 + 32;
console.log("A temperatura é de " + letraB + "°F.");

let letraCF = (30) * 9/5 + 32;
let letraCK = (letraCF - 32) * 5/9 + 273.15;
console.log("A temperatura é " + letraCF + "°F e " + letraCK + "K.");

let tempDigitada = prompt("Digite o valor da temperatura em graus Celsius");
letraCF = (tempDigitada) * 9/5 + 32;
letraCK = (letraCF - 32) * 5/9 + 273.15;
console.log("A temperatura é " + letraCF + "°F e " + letraCK + "K.");

// Questão 2

let resposta = prompt("Qual seu filme favorito?");
console.log("Resposta: " + resposta);

resposta = prompt("Qual sua série favorita?");
console.log("Resposta: " + resposta);

resposta = prompt("Qual seu livro favorito?");
console.log("Resposta: " + resposta);

resposta = prompt("Qual seu quadrinho favorito?");
console.log("Resposta: " + resposta);

resposta = prompt("Qual a sua música favorita?");
console.log("Resposta: " + resposta);

// Questão 3

const valorQwH = 0.05;
let valorSalario = Number(prompt("Digite o valor do salário mínimo"));
let qntConsumida = Number(prompt("Digite a quantidade de quilowatts consumida"));

let valorPagamento = valorQwH * 280;
console.log("O valor a ser pago é: R$", valorPagamento);

let valorDoDesconto = Number(prompt("Digite o valor do desconto"));
let valorComDesconto = 0.85 * valorPagamento;
console.log("O valor a ser pago com 15% de desconto é: R$", valorComDesconto);


// DESAFIOS

const libra = 20;
let valorConvertido = libra / 2.2046;
console.log(libra + "lb equivalem a " + valorConvertido + "kg.");

const onca = 10.5;
valorConvertido = onca / 35.274;
console.log(onca + "lb equivalem a " + valorConvertido + "kg.");

let milha = Number(prompt("Digite a quantidade de milhas"));
valorConvertido = milha / 0.00062137;
console.log(milha + "mi equivalem a " + valorConvertido + " m.");

let pes = Number(prompt("Digite a quantidade de pés"));
valorConvertido = pes / 3.2808;
console.log(pes + "ft equivalem a " + valorConvertido + "m.");

const galao = 103.56;
valorConvertido = galao / 0.26417;
console.log(galao + "gal equivalem a " + valorConvertido + "l.");

const xicara = 450;
valorConvertido = xicara * 0.24;
console.log(xicara + "xic equivalem a " + valorConvertido + "l.");

