/*Exercícios de Interpretação de Código

1.
O que a função faz?
A função converte um valor em dólar para real.

Como ela faz?
O prompt pede que o usuário digite o valor da cotação do dolar. A função recebe um valor em dolar como parâmetro e retorna o valor multiplicado pela cotação, ou seja, convertido em reais.

O que será impresso no console?
R$ + o resultado da multiplicação de 100 pela cotação do dolar informada. 


2. 
O que a função faz?
A função calcula valores de investimentos.

Como ela faz?
A função recebe dois parâmetros: tipo de investimento e valor. A função vai encaixar o tipo de investimento informado no caso ao qual ele corresponde no switch e multiplicar o valor indicado no parâmetro pelo valor que está no caso correspondente. Se não corresponder a nenhum caso, entra no default.

O que será impresso no console?
165
TIPO DE INVESTIMENTO INFORMADO INCORRETO!


3.
O que a função faz?
Coloca os valores pares do array numeros no array1 e os ímpares no array2.

Como ela faz?
Percorre o array e faz uma verificação em cada numero. Se for par, manda pro array1, caso contrário, amnda pro array2.

O que será impresso no console?
Quantidade total de números 14
6
8


4.
O que a função faz?
A função calcula o maior e o menor número do array numeros.

Como ela faz?
Cria uma variável numero1 que recebe um valor infinito e outra numero2 que recebe o valor 0. Verifica se cada valor do array é menor que numero1, se for, numero1 recebe esse número. O próximo if, verifica se cada numero do array é maior que numero2 e se for, numero 2 recebe numero. Assim, o primeiro if descobre o menor número e o segundo o maior.

O que será impresso no console?
-10
1590


Exercícios de Lógica de Programação

1.
For, forEach e for of.
Exemplo:
const lista = ["quarta", "quinta", "sexta"];
for(let elemento of lista){
    console.log(elemento);
}

2.
a. false
b. false
c. true
d. true
e. true

3.
O código funciona, mas não atende ao objetivo. Do jeito que foi feito, ele entrará em loop infinito, sempre imprimindo 0. Faltou incrementar o i em 1 (i++) após o console.log.

*/

//4.
/*
function classificaTriangulo(ladoA, ladoB, ladoC){
    if(ladoA === ladoB && ladoA === ladoC){
        console.log("O triângulo é equilátero");
    }else if(ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
        console.log("O triângulo é isósceles");    
    }else{
        console.log("O triâgulo é escaleno");
    }
}
let nomeDoTriangulo = classificaTriangulo(1, 2, 3);


//5.

const numero1 = 100;
const numero2 = 20;
let maiorNumero = (numero1 > numero2 ? numero1 : numero2);
console.log("O maior é", maiorNumero);

if(numero1%numero2 === 0){
    console.log(numero1 + " é divisível por " + numero2);
}else{
    console.log(numero1 + " não é divisível por " + numero2);
}

let diferenca = Math.abs(numero1 - numero2);
console.log("A diferença entre eles é ", diferenca);
*/

//Exercícios de Funções

//1. Fiz em duas funções. Cada uma delas faz uma coisa específica.

let maior = Infinity;
let aux = 0;
let elemento;
function segundoMenor(array){
    for(elemento of array){
        if(elemento < maior){
           aux = maior;
           maior = elemento;  
        }else if(elemento < aux){
           aux = elemento;
        }
    }
    return aux;
}
let resultado = segundoMenor([1, 2, 3, 4, 5, 6]);
console.log("O segundo menor número é ", resultado);

let menor = Number.NEGATIVE_INFINITY;
segundoMaior = (meuArray) => {
    for(let cadaNumero of meuArray){
        if(cadaNumero > menor){
            aux = menor;
            menor = cadaNumero;
        }else if(cadaNumero > aux){
            aux = cadaNumero;
        }

    }
    return aux;
}
resultado = segundoMaior([1, 2, 3, 4, 5, 6]);
console.log("O segundo maior número é ", resultado);

//2. 

alertFuture4 = () => {
    alert("Hello Future4");
}

alertFuture4();


