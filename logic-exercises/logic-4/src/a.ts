export {};

const palavra: string = "Iv4n4";

const regex: any = /[0-9]/;

function contemNumero(palavra: string): boolean{
    if(regex.test(palavra)){
        return true;
    }
    return false;
}


console.log(contemNumero(palavra));

