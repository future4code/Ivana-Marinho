const vetor = [52, 56, 2, 4, 987, 6, 12];


vetor.sort(function(a: number, b: number): any {
    return a - b;

}); 

console.log({menor: vetor[0], maior: vetor[vetor.length-1]});