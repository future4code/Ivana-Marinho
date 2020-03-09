/* EXERCÍCIO 1

a. []
b. [0, 1, 0, 1, 2, 3]
c. [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

EXERCÍCIO 2

a. Imprime 0, que é o índice do array que corresponde a Darvas.
   Imprime 2, que é o índice do array que corresponde a João.
   Undefined, pois não existe Paula no array.

b. Funcionaria. Como agora o array é de números, basta indicar qual é o valor do array que queremos o índice. 

EXERCÍCIO 3

A função realiza cálculos e joga os resultados no arrayFinal.
Um nome poderia ser preencheArray.

*/

//EXERCÍCIO 4

//a.

let idadeCachorro = (anosHumanos) => {
    return anosHumanos * 7;
}

let idadeDoCachorro = idadeCachorro(4);
console.log(idadeDoCachorro);

//b.

function informacoesPessoa(nome, idade, endereco, estudante){
    if(estudante){
        return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e sou estudante.";
    }else{
        return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e não sou estudante.";
    }
}

let dadosPessoais = informacoesPessoa("Goli", 20, "Rua Guarapari 190", false);
console.log(dadosPessoais);


//EXERCÍCIO 5

let dizSeculo = (ano) => {
    if(ano >= 1001 && ano <= 1100){
        return "O " + ano + " pertence ao século XI";
    }else if(ano >= 1101 && ano <= 1200){
        return "O " + ano + " pertence ao século XII";
    }else if(ano >= 1201 && ano <= 1300){
        return "O " + ano + " pertence ao século XIII";
    }else if(ano >= 1301 && ano <= 1400){
        return "O " + ano + " pertence ao século XIV";
    }else if(ano >= 1401 && ano <= 1500){
        return "O " + ano + " pertence ao século XV";
    }else if(ano >= 1501 && ano <= 1600){
        return "O " + ano + " pertence ao século XVI";
    }else if(ano >= 1601 && ano <= 1700){
        return "O " + ano + " pertence ao século XVII";
    }else if(ano >= 1701 && ano <= 1800){
        return "O " + ano + " pertence ao século XVIII";
    }else if(ano >= 1801 && ano <= 1900){
        return "O " + ano + " pertence ao século XIX";
    }else if(ano >= 1901 && ano <= 2000){
        return "O " + ano + " pertence ao século XX";
    }else if(ano >= 2001 && ano <= 2100){
        return "O " + ano + " pertence ao século XXI";
    }else{
        return "Ano fora do intervalo entre 1000dc e 2020dc.";
    }
}

let seculo = dizSeculo(2212);
console.log(seculo);

//EXERCÍCIO 6

//a.

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
let quantidadeDeElementos = (array) => {
    return array.length;
}

let numeroDeElementos = quantidadeDeElementos(array);
console.log(numeroDeElementos);

//b.

let parOuNao = function(numero){
    if(numero%2 === 0){
        return true;
    }else{
        return false;
    }
}

let par = parOuNao(14);
console.log(par);


//c.

let contaPar = (array) => {
    let qntPar = 0;
    for(let elemento of array){
        if(elemento%2 === 0){
            qntPar++;
        }
    }
    return qntPar;
}

let quantidadePar = contaPar(array);
console.log("A quantidade de números pares é ", quantidadePar);


//d.

parOuNao = function(numero){
    if(numero%2 === 0){
        return true;
    }else{
        return false;
    }
}

contaPar = (parOuNao) => {
        if(parOuNao){
            return "par";
        }else{
            return "ímpar";
        }
    }

console.log("O número é " + contaPar(parOuNao(11)));

