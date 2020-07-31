function nossoJogo() {
   console.log("Bem vindo ao jogo de Blackjack!")

   if(confirm("Quer iniciar uma nova rodada?")) {
      const carta1Usuario = comprarCarta()
      const carta2Usuario = comprarCarta()
      const pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
      console.log("Usuário - cartas:", carta1Usuario.texto, carta2Usuario.texto, "pontuação -", pontuacaoUsuario )
      
      const carta1Computador = comprarCarta()
      const carta2Computador = comprarCarta()
      const pontuacaoComputador = carta1Computador.valor + carta2Computador.valor
      console.log("Computador - cartas:", carta1Computador.texto, carta2Computador.texto, "pontuação - ", pontuacaoComputador)

      if (pontuacaoUsuario === pontuacaoComputador) {
         console.log("Empate!")
      } else if (pontuacaoUsuario > pontuacaoComputador) {
         console.log("O usuário ganhou!")
      } else {
         console.log("O computador ganhou!")
      }
   } else {
      console.log("O jogo acabou!")
   }
}