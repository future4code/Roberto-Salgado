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


// Exercícios de escrita de código
// 1.
// a.
const suaIdade = prompt("Qual a sua idade?")
// b.
const idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?")
// c.
const comparacao = Number(suaIdade) > Number(idadeMelhorAmigo)
console.log("Sua idade é maior do que a do seu melhor amigo?", comparacao)
// d.
const diferenca = Number(suaIdade) - Number(idadeMelhorAmigo)
console.log("A diferença de idades é:", diferenca)

// 2.
// a.
const numeroPar = prompt("Insira um número par:")
// b.
const restoDeDois = Number(numeroPar)/2
console.log(restoDeDois)
// c. Números pares, quando divididos por 2, sempre terão resto 0.
// d. Números ímpares, quando divididos por 2, sempre terão resto diferente de 0.

// 3.
// a.
let listaDeTarefas = []
// b.
listaDeTarefas.push(prompt("Diga uma tarefa que você precisa fazer durante o dia:"))
listaDeTarefas.push(prompt("Diga outra tarefa que você precisa fazer durante o dia:"))
listaDeTarefas.push(prompt("Diga mais uma tarefa que você precisa fazer durante o dia:"))
// c.
console.log(listaDeTarefas)
// d.
const realizada = prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2")
// e.
listaDeTarefas.splice(Number(realizada),1)
// f.
console.log(listaDeTarefas)

// 4.
const nomeDoUsuario = prompt("Qual o seu nome?")
const emailDoUsuario = prompt("Qual o seu e-mail?")
const mensagem = "O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!"
console.log(mensagem)

// Desafios Extras
// 1.
// a.
const temperaturaFa = 77 // Fahrenheit
let temperaturaKa // Kelvin
temperaturaKa = (temperaturaFa - 32) * 5 / 9 + 273.15

const aTemperatura = temperaturaKa + " K"
console.log(aTemperatura)

// b.
const temperaturaCb = 80 // Celsius
let temperaturaFb // Fahrenheit
temperaturaFb = temperaturaCb * 9 / 5 + 32

const bTemperatura = temperaturaFb + " °F"
console.log(bTemperatura)

// c.
const temperaturaCc = 30 // Celsius
let temperaturaFc // Fahrenheit
let temperaturaKc // Kelvin

temperaturaFc = temperaturaCc * 9 / 5 + 32
temperaturaKc = (temperaturaFc - 32) * 5 / 9 + 273.15

const cTemperatura1 = temperaturaFc + " °F"
console.log(cTemperatura1)
const cTemperatura2 = temperaturaKc + " K"
console.log(cTemperatura2)

// d.
let temperaturaCd = prompt("Insira o valor em graus Celsius que deseja converter:") // Celsius
let temperaturaFd // Fahrenheit
let temperaturaKd // Kelvin

temperaturaFd = Number(temperaturaCd) * 9 / 5 + 32
temperaturaKd = (temperaturaFd - 32) * 5 / 9 + 273.15

const dTemperatura1 = temperaturaFd + " °F"
console.log(dTemperatura1)
const dTemperatura2 = temperaturaKd + " K"
console.log(dTemperatura2)

// 2.
// a.
const consumoKh = 280 // quilowatt-hora
let valorDaConta

valorDaConta = consumoKh * 0.05

conta = "R$ " + valorDaConta
console.log(conta)

// b.
let desconto = 0.15 // Porcento

valorDaContaComDesconto = valorDaConta * (1 - desconto)

contaComDesconto = "R$ " + valorDaContaComDesconto
console.log(contaComDesconto)

// 3.
// a.
const massaEmLibrasA = 20
let massaEmKilogramasA
massaEmKilogramasA = massaEmLibrasA / 2.205
const massaA = massaEmLibrasA + "lb equivalem a " + massaEmKilogramasA + "kg"
console.log(massaA)

// b.
const massaEmOncasB = 10.5
let massaEmKilogramasB
massaEmKilogramasB = massaEmOncasB / 35.274
const massaB = massaEmOncasB + "oz equivalem a " + massaEmKilogramasB + "kg"
console.log(massaB)

// c.
const distanciaEmMilhasC = 100
let distanciaEmMetrosC
distanciaEmMetrosC = distanciaEmMilhasC * 1609
const distanciaC = distanciaEmMilhasC + "mi equivalem a " + distanciaEmMetrosC + "m"
console.log(distanciaC)

// d.
const distanciaEmPesD = 50
let distanciaEmMetrosD
distanciaEmMetrosD = distanciaEmPesD / 3.281
const distanciaD = distanciaEmPesD + "ft equivalem a " + distanciaEmMetrosD + "m"
console.log(distanciaD)

// e.
const volumeEmGaloesE = 103.56
let volumeEmLitrosE
volumeEmLitrosE = volumeEmGaloesE * 3.785
const volumeE = volumeEmGaloesE + "gal equivalem a " + volumeEmLitrosE + "l"
console.log(volumeE)

// f.
const volumeEmXicarasF = 450
let volumeEmLitrosF
volumeEmLitrosF = volumeEmXicarasF * 6 / 25
const volumeF = volumeEmXicarasF + "xic equivalem a " + volumeEmLitrosF + "l"
console.log(volumeF)

// g.
const massaEmOncasG = prompt("Insira a massa em onças:")
let massaEmKilogramasG
massaEmKilogramasG = massaEmOncasG / 35.274
const massaG = massaEmOncasG + "oz equivalem a " + massaEmKilogramasG + "kg"
console.log(massaG)