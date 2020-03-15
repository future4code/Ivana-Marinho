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


//Exercícios de Objetos
//1.
/*
Arrays são uma lista de elementos. Devemos usá-lo quando precisamos agrupar vários elementos em um único lugar. 
Objetos são elementos que possuem características próprias. São uma construção da classe. Usamos quando precisamos descrever as características de alguma coisa do mundo real, como uma pessoa ou algum tipo de um animal, por exemplo.
*/

//2.

function criaRetangulo(lado1, lado2){
    return retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2*(lado1 + lado2),
        area: lado1 * lado2
    };
}

const retanguloCriado = criaRetangulo(2, 3);
console.log(retanguloCriado);


//3.

const filmeFavorito = {
    titulo: 'A Ghost Story',
    ano: 2017,
    diretor: 'David Lowery',
    elenco: ['Casey Affleck', 'Rooney Mara']
}

console.log("Venha assistir ao filme " + filmeFavorito.titulo + " de " + filmeFavorito.ano + ", dirigido por " + filmeFavorito.diretor + " e estrelado por " + filmeFavorito.elenco + ".");


//4.

const pessoa = {
    nome: 'Maria',
    idade: 20,
    email: 'maria@gmail.com',
    endereco: 'Rua do Comercio, 21'
}

anonimizarPessoa = (pessoa) => {
    return anonimo = {
        ...pessoa,
        nome: 'Anônimo',
    }
}

const pessoaAnonima = anonimizarPessoa(pessoa);
console.log(pessoaAnonima);
//console.log(pessoa); só para conferir se o objeto inicial está intacto


//Exercícios de Funções de Array

//1.
//a.

const pessoas = [
    { nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const idadeMaiorQue20 = pessoas.filter((pessoa, index, array) => {
    if(pessoa.idade >= 20){
        return {
            nome: pessoa.nome,
            idade: pessoa.idade
        }
    }
});

console.log(idadeMaiorQue20);

//b.

const pessoasMenoresDe20 = pessoas.filter((pessoa, index, array) => {
    if(pessoa.idade < 20){
        return {
            nome: pessoa.nome,
            idade: pessoa.idade
        }
    }
});

console.log(pessoasMenoresDe20);


//2.

const arrayDeTeste = [1, 2, 3, 4, 5, 6];
//a.

let dobraArray = arrayDeTeste.map((deTeste, index, array) => {
    return deTeste * 2;
});

console.log(dobraArray);


//b.

const triplicaArray = arrayDeTeste.map((cadaNumeroDoArrayDeTeste, index, array) => {
    let triplo = cadaNumeroDoArrayDeTeste * 3;
    return `${triplo}`;
});

console.log(triplicaArray);


//c.

const arrayDeStrings = arrayDeTeste.map((numeroEmString, index, array) => {
    if(numeroEmString%2 === 0){
        return `${numeroEmString} é par`;
    }else{
        return `${numeroEmString} é ímpar`;
    }
});

console.log(arrayDeStrings);


//3.

const pessoas1 = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
];

//a.

const podemEntrar = pessoas1.filter((cadaPessoa, index, array) => {
    if(cadaPessoa.altura >= 1.5 && cadaPessoa.idade > 14 && cadaPessoa.idade < 60){
        return cadaPessoa;
        }
    });

    console.log(podemEntrar);


const naoPodemEntrar = pessoas1.filter((cadaPessoa, index, array) => {
    if(cadaPessoa.altura < 1.5 || cadaPessoa.idade <= 14 || cadaPessoa.idade >= 60){
        return cadaPessoa;
    }
});
console.log(naoPodemEntrar);


//4.

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
];

const consultaCanceladaOuNao = consultas.map((cadaConsulta, index, array) => {
    if(cadaConsulta.cancelada === false && cadaConsulta.genero === 'masculino'){
        return `Olá, Sr. ${cadaConsulta.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${cadaConsulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`;
    }else if(cadaConsulta.cancelada === false && cadaConsulta.genero === 'feminino'){
        return `Olá, Sra. ${cadaConsulta.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${cadaConsulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`;
    }else if(cadaConsulta.cancelada === true && cadaConsulta.genero === 'masculino'){
        return `Olá, Sr. ${cadaConsulta.nome}. Infelizmente, sua consulta marcada para o dia ${cadaConsulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`;
    }else if(cadaConsulta.cancelada === true && cadaConsulta.genero === 'feminino'){
        return `Olá, Sra. ${cadaConsulta.nome}. Infelizmente, sua consulta marcada para o dia ${cadaConsulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`;
    }
});

console.log(consultaCanceladaOuNao);


//5.

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
];

let novoSaldo;
const atualizaSaldo = contas.forEach((conta, index, array) => {
    novoSaldo = Number(prompt(`Digite o novo saldo de ${conta.cliente}`));
    conta.saldoTotal = novoSaldo;
    return conta.saldoTotal;
});

console.log(contas);