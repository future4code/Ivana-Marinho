const palavra1: string = "ivana";
const palavra2: string = "Ivana";

function comparaStrings(palavra1:string, palavra2: string): boolean{
    if (palavra1 === palavra2){
        return true;
    }
    return false;
}

console.log(comparaStrings(palavra1, palavra2));


