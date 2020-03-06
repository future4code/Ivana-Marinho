import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

if(confirm("Quer iniciar uma nova rodada?")){
   let usuario = 0;
   let carta;
   let cartaTexto = 0;
   let arrayUsuario = [];
   for(let i = 0; i < 2; i++){
      carta = comprarCarta();
      if(carta.texto === "A"){
         while(carta.texto === "A"){                       
            carta = comprarCarta();
         }
         }else{
      arrayUsuario.push(carta.texto);
      cartaTexto += carta.texto;
      usuario += carta.valor;
         }
   }
        
   let arrayComp = [];
   let computador = 0;
   let textoCarta = 0;
   for(let i = 0; i < 2; i++){
      carta = comprarCarta();
      if(carta.texto === "A"){
         while(carta.texto === "A"){
            carta = comprarCarta();
         }
      }else{
      arrayComp.push(carta.texto);
      textoCarta += carta.texto;
      computador += carta.valor;
      }
   }

   for(let i = 0; i < 49; i++){ //são 52 cartas e 4 já foram sorteadas
         if(confirm("Suas cartas são: " + arrayUsuario + ". A carta revelada do computador é " +
         arrayComp[0] +"\nDeseja comprar mais cartas?")){
         carta = comprarCarta();
         arrayUsuario.push(carta.texto);
         usuario += carta.valor;
        
       }else{
          if(usuario <= 21){
             while(computador <= usuario){
               carta = comprarCarta();
               arrayComp.push(carta.texto);
               textoCarta += carta.texto;
               computador += carta.valor;
             }
          }
          console.log("O jogo acabou!");
          break;
       }
       }
     
   console.log("Usuário - cartas: ", cartaTexto, " - pontuação " + usuario);
   console.log("Computador - cartas: ", textoCarta, " - pontuação " + computador);

   if(usuario > 21){
      console.log("O usuário perdeu!");
   }else if(computador > 21 && usuario < 21){
      console.log("O usuário ganhou!");
   }else if(usuario === computador){
      console.log("Empate!");
   }else if(usuario < 21 && computador < 21){
      if(usuario > computador){
         console.log("O usuário ganhou!");
      }else{
         console.log("O computador ganhou!");
      }
   }

}else{
   console.log("O jogo acabou!");
}