import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

console.log("Bem-vindo ao jogo de BlackJack!");

if(confirm("Quer iniciar uma nova rodada?")){
   let usuario = 0;
   let carta;
   let cartaTexto = 0;
   for(let i = 0; i < 2; i++){
      carta = comprarCarta();
         cartaTexto += carta.texto;
            usuario += carta.valor;
   }
  
   let computador = 0;
   let textoCarta = 0;
   for(let i = 0; i < 2; i++){
      carta = comprarCarta();
         textoCarta += carta.texto;
            computador += carta.valor;
   }
   console.log("Usuário - cartas: ", cartaTexto, " - pontuação " + usuario);
   console.log("Computador - cartas: ", textoCarta, " - pontuação " + computador);

   if(usuario > computador){
      console.log("O usuário ganhou!");
   }else if(usuario < computador){
      console.log("O computador ganhou!");
   }else{
      console.log("Empate!");
   }

}else{
   console.log("O jogo acabou!");
}

