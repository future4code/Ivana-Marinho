function calculaNumeros(numeroA: number, numeroB: number) : number{
        resultados = {
        soma: numeroA+numeroB,
        subtração: numeroA-numeroB,
        multiplicação: numeroA*numeroB,
        calculaMaior: () => {
            if(numeroA > numeroB){
                return numeroA;
            }
            return numeroB;
        }
    }
}