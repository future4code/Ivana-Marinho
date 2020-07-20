export {};

const numero: number = 12;
let array: Array<number> = [6, 7, 8];
let novoArray : Array<number> = [];

function completaArray(array: Array<number>, numero: number): Array<number>{
    if(numero < array[0]){
        for(let i= numero; i < array[0]; i++){
            novoArray.push(i); 
        }
        return novoArray.concat(array);
    }else if(numero > array[array.length-1]){
        for(let i = (array[array.length-1])+1; i <= numero; i++){
            novoArray.push(i);
        }
          return array.concat(novoArray);
    } 
}


console.log(completaArray(array, numero));
