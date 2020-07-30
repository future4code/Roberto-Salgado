// Semana 3 - Aula 10: Operadores

// Exercícios de interpretação de código

// 1.
// a. false
// b. false
// c. true
// e. boolean

// 2.
// a. undefined
// b. null
// c. 11
// d. 3
// e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 10


// // Exercícios de escrita de código
// // 1.
// // a.
// const suaIdade = prompt("Qual a sua idade?")
// // b.
// const idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?")
// // c.
// const comparacao = Number(suaIdade) > Number(idadeMelhorAmigo)
// console.log("Sua idade é maior do que a do seu melhor amigo?", comparacao)
// // d.
// const diferenca = Number(suaIdade) - Number(idadeMelhorAmigo)
// console.log("A diferença de idades é:", diferenca)

// // 2.
// // a.
// const numeroPar = prompt("Insira um número par:")
// // b.
// const restoDeDois = Number(numeroPar)/2
// console.log(restoDeDois)
// // c. Números pares, quando divididos por 2, sempre terão resto 0.
// // d. Números ímpares, quando divididos por 2, sempre terão resto diferente de 0.

// // 3.
// // a.
// let listaDeTarefas = []
// // b.
// listaDeTarefas.push(prompt("Diga uma tarefa que você precisa fazer durante o dia:"))
// listaDeTarefas.push(prompt("Diga outra tarefa que você precisa fazer durante o dia:"))
// listaDeTarefas.push(prompt("Diga mais uma tarefa que você precisa fazer durante o dia:"))
// // c.
// console.log(listaDeTarefas)
// // d.
// const realizada = prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2")
// // e.
// listaDeTarefas.splice(Number(realizada),1)
// // f.
// console.log(listaDeTarefas)

// // 4.
// const nomeDoUsuario = prompt("Qual o seu nome?")
// const emailDoUsuario = prompt("Qual o seu e-mail?")
// const mensagem = "O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!"
// console.log(mensagem)

// // Desafios Extras
// // 1.
// // a.
// const temperaturaFa = 77 // Fahrenheit
// let temperaturaKa // Kelvin
// temperaturaKa = (temperaturaFa - 32) * 5 / 9 + 273.15

// const aTemperatura = temperaturaKa + " K"
// console.log(aTemperatura)

// // b.
// const temperaturaCb = 80 // Celsius
// let temperaturaFb // Fahrenheit
// temperaturaFb = temperaturaCb * 9 / 5 + 32

// const bTemperatura = temperaturaFb + " °F"
// console.log(bTemperatura)

// // c.
// const temperaturaCc = 30 // Celsius
// let temperaturaFc // Fahrenheit
// let temperaturaKc // Kelvin

// temperaturaFc = temperaturaCc * 9 / 5 + 32
// temperaturaKc = (temperaturaFc - 32) * 5 / 9 + 273.15

// const cTemperatura1 = temperaturaFc + " °F"
// console.log(cTemperatura1)
// const cTemperatura2 = temperaturaKc + " K"
// console.log(cTemperatura2)

// // d.
// let temperaturaCd = prompt("Insira o valor em graus Celsius que deseja converter:") // Celsius
// let temperaturaFd // Fahrenheit
// let temperaturaKd // Kelvin

// temperaturaFd = Number(temperaturaCd) * 9 / 5 + 32
// temperaturaKd = (temperaturaFd - 32) * 5 / 9 + 273.15

// const dTemperatura1 = temperaturaFd + " °F"
// console.log(dTemperatura1)
// const dTemperatura2 = temperaturaKd + " K"
// console.log(dTemperatura2)

// // 2.
// // a.
// const consumoKh = 280 // quilowatt-hora
// let valorDaConta

// valorDaConta = consumoKh * 0.05

// conta = "R$ " + valorDaConta
// console.log(conta)

// // b.
// let desconto = 0.15 // Porcento

// valorDaContaComDesconto = valorDaConta * (1 - desconto)

// contaComDesconto = "R$ " + valorDaContaComDesconto
// console.log(contaComDesconto)

// // 3.
// // a.
// const massaEmLibrasA = 20
// let massaEmKilogramasA
// massaEmKilogramasA = massaEmLibrasA / 2.205
// const massaA = massaEmLibrasA + "lb equivalem a " + massaEmKilogramasA + "kg"
// console.log(massaA)

// // b.
// const massaEmOncasB = 10.5
// let massaEmKilogramasB
// massaEmKilogramasB = massaEmOncasB / 35.274
// const massaB = massaEmOncasB + "oz equivalem a " + massaEmKilogramasB + "kg"
// console.log(massaB)

// // c.
// const distanciaEmMilhasC = 100
// let distanciaEmMetrosC
// distanciaEmMetrosC = distanciaEmMilhasC * 1609
// const distanciaC = distanciaEmMilhasC + "mi equivalem a " + distanciaEmMetrosC + "m"
// console.log(distanciaC)

// // d.
// const distanciaEmPesD = 50
// let distanciaEmMetrosD
// distanciaEmMetrosD = distanciaEmPesD / 3.281
// const distanciaD = distanciaEmPesD + "ft equivalem a " + distanciaEmMetrosD + "m"
// console.log(distanciaD)

// // e.
// const volumeEmGaloesE = 103.56
// let volumeEmLitrosE
// volumeEmLitrosE = volumeEmGaloesE * 3.785
// const volumeE = volumeEmGaloesE + "gal equivalem a " + volumeEmLitrosE + "l"
// console.log(volumeE)

// // f.
// const volumeEmXicarasF = 450
// let volumeEmLitrosF
// volumeEmLitrosF = volumeEmXicarasF * 6 / 25
// const volumeF = volumeEmXicarasF + "xic equivalem a " + volumeEmLitrosF + "l"
// console.log(volumeF)

// // g.
// const massaEmOncasG = prompt("Insira a massa em onças:")
// let massaEmKilogramasG
// massaEmKilogramasG = massaEmOncasG / 35.274
// const massaG = massaEmOncasG + "oz equivalem a " + massaEmKilogramasG + "kg"
// console.log(massaG)


// ***


// Semana 3 - aula 11: Condicionais

// Exercícios de interpretação de código
// EXERCÍCIO 1. 
// O código testa se o número digitado pelo usuário é par ou ímpar. 
// Se o resultado da operação %(resto) por 2 for zero o número é par, e é impresso no console "Passou no teste". 
// Senão, é ímpar, e "Não passou no teste é impresso no console".

// EXERCÍCIO 2. 
// a. O código serve para retornar o preço da fruta equivalente ao buscado pelo usuário.
// b. O preço da fruta Maça é R$ 2.25
// c. O preço da fruta Maça é R$ 5

// EXERCÍCIO 3.
// a. A primeira linha está recebendo o que foi digitado pelo usuário, 
//    transformando em tipo número e insirindo na varíavel "numero".
// b. Se o usuário digitar 10, a mensagem no terminal será "Esse número passou no teste".
//    Se o usuário digitar -10, não será exibida nenhuma mensagem no console.
// c. Há um erro no código. Após o bloco do if há um comando pedindo para imprimir a variável "mensagem".
//    Porém, essa variável "mensagem" foi definida apenas dentro do bloco do if.

// Exercícios de escrita de código
// // EXERCÍCIO 4
// // 1. e 2.
// const idadeParaDirigir = Number(prompt("Qual a sua idade?"))
// // 3.
// if (idadeParaDirigir >= 18) {
//   console.log("Você pode dirigir")
// } else {
//   console.log("Você não pode dirigir.")
// }
  
// // EXERCÍCIO 5
// const turnoDeEstudo5 = prompt("Em qual turno você estuda? (Digite M para Matutino, V para Vespertino e N para Noturno)").toUpperCase()
// if (turnoDeEstudo5 === "M") {
//   console.log("Bom dia!")
// } else if (turnoDeEstudo5 === "V") {
//   console.log("Boa tarde!")
// } else if (turnoDeEstudo5 === "N") {
//   console.log("Boa noite!")
// } else {
//   console.log("Opção inválida.")
// }

// // EXERCÍCIO 6
// const turnoDeEstudo6 = prompt("Em qual turno você estuda? (Digite M para Matutino, V para Vespertino e N para Noturno)").toUpperCase()
// switch (turnoDeEstudo6) {
//   case "M":
//     console.log("Bom dia!")
//     break
//   case "V":
//     console.log("Boa tarde!")
//     break
//   case "N":
//     console.log("Boa noite!")
//     break
//   default:
//     console.log("Opção inválida.")
// }

// // EXERCÍCIO 7
// const generoDoFilme7 = prompt("Qual o gênero do filme que vão assitir?")
// const precoDoIngresso7 = Number(prompt("Quanto custo o ingresso para este filme?"))
// if (generoDoFilme7 === "fantasia") {
//   if (precoDoIngresso7 < 15) {
//     console.log("Bom filme!")
//   } else {
//     console.log("Escolha outro filme :(")
//   }
// } else {
//   console.log("Escolha outro filme :(")
// }

// // DESAFIO 1
// const generoDoFilmeD1 = prompt("Qual o gênero do filme que vão assitir?")
// const precoDoIngressoD1 = Number(prompt("Quanto custo o ingresso para este filme?"))
// if (generoDoFilmeD1 === "fantasia") {
//   if (precoDoIngressoD1 < 15) {
//     let snack = prompt("Qual snack você vai comprar?")
//     console.log("Bom filme!")
//     console.log("... com", snack)
//   } else {
//     console.log("Escolha outro filme :(")
//   }
// } else {
//   console.log("Escolha outro filme :(")
// }

// // DESAFIO 2
// let nomeCompleto = prompt("Seu nome completo:")
// let tipoDeJogo = prompt("Qual o tipo de jogo? (IN para internacional e DO para doméstico").toUpperCase()
// let etapaDoJogo
// let categoria
// let quantidade
// let quantidadeDeIngressos = quantidade  + " ingressos"
// let precoDoIngresso
// let valorTotal
// let moeda

// switch (tipoDeJogo) {
//   case "IN":
//     tipoDeJogo = "Internacional"
//     moeda = "U$ "
//     etapaDoJogo = prompt("Qual a etapa do jogo? (SF para semi-final, DT para decisão do terceiro lugar e FI para final").toUpperCase()
//     switch (etapaDoJogo) {
//       case "SF":
//         etapaDoJogo = "Semi-final"
//         categoria = Number(prompt("Qual a categoria? (1, 2, 3 ou 4"))
//         switch (categoria) {
//           case 1:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 1320/4.1
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 2:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 880/4.1
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 3:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 550/4.1
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 4:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 220/4.1
//             valorTotal = precoDoIngresso * quantidade
//             break
//           default:
//             categoria = "Inválida"
//             precoDoIngresso = "ERRO"
//             valorTotal = "ERRO"
//             break
//         }
//         break
//       case "DT":
//         etapaDoJogo = "Decisão dp terceiro lugar"
//         categoria = Number(prompt("Qual a categoria? (1, 2, 3 ou 4"))
//         switch (categoria) {
//           case 1:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 660/4.1
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 2:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 440/4.1
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 3:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 330/4.1
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 4:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 170/4.1
//             valorTotal = precoDoIngresso * quantidade
//             break
//           default:
//             categoria = "Inválida"
//             precoDoIngresso = "ERRO"
//             valorTotal = "ERRO"
//             break
//         }
//         break
//       case "FI":
//         etapaDoJogo = "Final"
//         categoria = Number(prompt("Qual a categoria? (1, 2, 3 ou 4"))
//         switch (categoria) {
//           case 1:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 1980/4.1
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 2:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 1320/4.1
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 3:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 880/4.1
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 4:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 330/4.1
//             valorTotal = precoDoIngresso * quantidade
//             break
//           default:
//             categoria = "Inválida"
//             precoDoIngresso = "ERRO"
//             valorTotal = "ERRO"
//             break
//         }
//         break
//       default:
//         etapaDoJogo = "Inválido"
//         precoDoIngresso = "ERRO"
//         valorTotal = "ERRO"
//         break
//     }
//     break
//   case "DO":
//     tipoDeJogo = "Doméstico"
//     moeda = "R$ "
//     etapaDoJogo = prompt("Qual a etapa do jogo? (SF para semi-final, DT para decisão do terceiro lugar e FI para final").toUpperCase()
//     switch (etapaDoJogo) {
//       case "SF":
//         etapaDoJogo = "Semi-final"
//         categoria = Number(prompt("Qual a categoria? (1, 2, 3 ou 4"))
//         switch (categoria) {
//           case 1:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 1320
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 2:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 880
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 3:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 550
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 4:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 220
//             valorTotal = precoDoIngresso * quantidade
//             break
//           default:
//             categoria = "Inválida"
//             precoDoIngresso = "ERRO"
//             valorTotal = "ERRO"
//             break
//         }
//         break
//       case "DT":
//         etapaDoJogo = "Decisão dp terceiro lugar"
//         categoria = Number(prompt("Qual a categoria? (1, 2, 3 ou 4"))
//         switch (categoria) {
//           case 1:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 660
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 2:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 440
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 3:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 330
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 4:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 170
//             valorTotal = precoDoIngresso * quantidade
//             break
//           default:
//             categoria = "Inválida"
//             precoDoIngresso = "ERRO"
//             valorTotal = "ERRO"
//             break
//         }
//         break
//       case "FI":
//         etapaDoJogo = "Final"
//         categoria = Number(prompt("Qual a categoria? (1, 2, 3 ou 4"))
//         switch (categoria) {
//           case 1:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 1980
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 2:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 1320
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 3:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 880
//             valorTotal = precoDoIngresso * quantidade
//             break
//           case 4:
//             quantidade = Number(prompt("Quantidade de ingressos:"))
//             precoDoIngresso = 330
//             valorTotal = precoDoIngresso * quantidade
//             break
//           default:
//             categoria = "Inválida"
//             precoDoIngresso = "ERRO"
//             valorTotal = "ERRO"
//             break
//         }
//         break
//       default:
//         etapaDoJogo = "Inválido"
//         precoDoIngresso = "ERRO"
//         valorTotal = "ERRO"
//         break
//     }  
//     break
//   default:
//     tipoDeJogo = "Inválido"
//     moeda = "S/V"
//     precoDoIngresso = "ERRO"
//     valorTotal = "ERRO"
//     break
// }

// console.log("---Dados da compra---")
// console.log("Nome do cliente:  " + nomeCompleto)
// console.log("Tipo do jogo: " + tipoDeJogo)
// console.log("Etapa do jogo: " + etapaDoJogo)
// console.log("Categoria: " + categoria)
// console.log("Quantidade de Ingressos: " + quantidadeDeIngressos)
// console.log("---Valores---")
// console.log("Valor do ingresso: " + moeda + " " + precoDoIngresso)
// console.log("Valor total: " + moeda + " " + valorTotal)


// Semana 3 - Aula 12: Laços

// Exercícios de interpretação de código
// EXERCÍCIO 1
// O código está somando, dentro de um laço de repetição, o índice a 
// variável "valor" enquanto este índice for menor que 5.
// Resultado impresso no console: 10

// EXERCÍCIO 2
// a.
// 19
// 21
// 23
// 25
// 27
// 30
// b.
// Usando o laço "for" é o mais fácil ter acesso ao índice, já que você o 
// define no código.
// Mas, com o laço "for... of..." podemos acessar o índice usando o método 
// ".keys()" ou o método ".entries()" para acessar o índice e o valor.

// DESAFIO 1
// 0
// 00
// 000
// 0000

// Exercícios de escrita de código
// EXERCÍCIO 3
const array3 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// a.
for (let value3A of array3) {
  console.log(value3A)
}
// b.
for (let value3B of array3) {
  value3B /= 10
  console.log(value3B)
}
// c.
const array3C = []
for (let value3C of array3) {
  if (value3C % 2 ===0) {
    array3C.push(value3C)
  }
}
console.log(array3C)
// d.
const array3D = []
// usando "for"
for (let i = 0; i < array3.length; i++) {
  array3D.push("O elemento do índex " + i + " é: " + array3[i])
}
// usando "for... of..."
// for (const [index3D, value3D] of array3.entries()) {
//   array3D.push("O elemento do índex " + index3D + " é: " + value3D)
// }
console.log(array3D)
// e.
let valorMaximo = -Infinity
let valorMinimo = Infinity
for (let value3E of array3) {
  if (value3E > valorMaximo) {
    valorMaximo = value3E
  } else if (value3E < valorMinimo) {
    valorMinimo = value3E
  }
}
console.log("O maior número é", valorMaximo, "e o menor é", valorMinimo)

// DESAFIO 2

const numeroD2 = prompt("Digite um número:")
console.log("Vamos jogar!")
let chuteD2 = Number(prompt("Chute um número:"))
let contadorDeChutesD2 = 0
while (chuteD2 != numeroD2) {
  console.log("O número chutado foi:", chuteD2)
  contadorDeChutesD2 ++
  if (numeroD2 < chuteD2) {
    console.log("Errrrrrrrou, é menor")
    chuteD2 = prompt("Chute outro número:");
  } else {
    console.log("Errrrrrrrou, é maior")
    chuteD2 = prompt("Chute outro número:");
  }
}
console.log("Acertou!");
console.log("O número de tentativas foi:", contadorDeChutesD2);

//DESAFIO 3

const numeroD3 = Math.floor((Math.random() * 100) + 1)
console.log("Vamos jogar!")
let chuteD3 = Number(prompt("Chute um número:"))
let contadorDeChutesD3 = 0
while (chuteD3 != numeroD3) {
  console.log("O número chutado foi:", chuteD3)
  contadorDeChutesD3 ++
  if (numeroD3 < chuteD3) {
    console.log("Errrrrrrrou, é menor")
    chuteD3 = prompt("Chute outro número:");
  } else {
    console.log("Errrrrrrrou, é maior")
    chuteD3 = prompt("Chute outro número:");
  }
}
console.log("Acertou!");
console.log("O número de tentativas foi:", contadorDeChutesD3);