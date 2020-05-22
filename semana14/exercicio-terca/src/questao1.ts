const operação: string = process.argv[2];
const numeroA: number = Number(process.argv[3]);
const numeroB: number = Number(process.argv[4]);

function calculos(operação: string, numeroA: number, numeroB: number) : string | number{
    switch (operação){
        case "soma":
            return numeroA + numeroB;
        
        case "subtração":
            return numeroA - numeroB;

        case "multiplicação":
            return numeroA * numeroB;

        case "divisão":
            return numeroA/numeroB;

        default:
            return "Operação inválida!";
    }

}

console.log(calculos(operação, numeroA, numeroB));
