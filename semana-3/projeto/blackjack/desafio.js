function desafio() {
   
   if(confirm("Bem vindo ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")) {
      let cartasUsuario = [comprarCarta(), comprarCarta()]
      let cartasComputador = [comprarCarta(), comprarCarta()]
      
      for (iAS = 0; iAS < 1; ) {
         if (cartasUsuario[0].texto.includes("A") && cartasUsuario[1].texto.includes("A")) {
            cartasUsuario = [comprarCarta(), comprarCarta()]
         } else if (cartasComputador[0].texto.includes("A") && cartasComputador[1].texto.includes("A")){
            cartasComputador = [comprarCarta(), comprarCarta()]
         } else {
            iAS ++
         }
      }

      let pontosUsuario = 0
      for (let carta of cartasUsuario) {
         pontosUsuario += carta.valor
      }
      let pontosComputador = 0
      for (let carta of cartasComputador) {
         pontosComputador += carta.valor
      }
      
      let hitMe = confirm(
         "Suas cartas são " + cartasUsuario[0].texto + " " + cartasUsuario[1].texto + ".\n" +
         "A carta revelada do computador é " + cartasComputador[0].texto + ".\n" +
         "Deseja comprar mais uma carta?"
         )
      
      for (; hitMe; ) {
         const novaCarta = comprarCarta()
         cartasUsuario.push(novaCarta)
         pontosUsuario += novaCarta.valor
         if (pontosUsuario < 21) {
            let novasCartasUsuario = ""
            for (carta of cartasUsuario) {
               novasCartasUsuario += carta.texto + " "
            }
            hitMe = confirm(
               "Suas cartas são " + novasCartasUsuario + "." + "\n" +
               "A carta revelada do computador é " + cartasComputador[0].texto + ".\n" +
               "Deseja comprar mais uma carta?"
               )
         } else {
            hitMe = false
         }
      }
      
      for (; pontosUsuario <= 21 && pontosComputador <= pontosUsuario; ) {
         const novaCarta = comprarCarta()
         cartasComputador.push(novaCarta)
         pontosComputador += novaCarta.valor
      }

      let resultado = ""
      if (pontosUsuario > 21) {
         resultado = "O computador ganhou!"
      } else if (pontosComputador > 21) {
         resultado = "O usuário ganhou!"
      } else if (pontosComputador > pontosUsuario) {
         resultado = "O computador ganhou!"
      } else if (pontosUsuario > pontosComputador) {
         resultado = "O usuário ganhou!"
      } else {
         resultado = "Empate!"
      }

      let cartasFinaisUsuario = ""
      for (carta of cartasUsuario) {
         cartasFinaisUsuario += carta.texto + " "
      }
      
      let cartasFinaisComputador = ""
      for (carta of cartasComputador) {
         cartasFinaisComputador += carta.texto + " "
      }


      alert(
         "Suas cartas são " + cartasFinaisUsuario + 
         ". Sua pontuação é " + pontosUsuario + ".\n" +
         "As cartas do computador são " + cartasFinaisComputador + 
         ". A pontuação do computador é " + pontosComputador + ".\n" +
         resultado
         )
   } else {
      console.log("O jogo acabou!")
   }
}