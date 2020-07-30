/* 
Respostas - Exercícios de interpretação de código

Exercício 1. 
10
10 5

Exercício 2.
10 10 10
*/


/* 
Respostas - Exercícios de escrita de código
*/

// Exercício 1
// a.
let nome
// b.
let idade

// c.
console.log(typeof(nome))
console.log(typeof(idade))

// d.
/* Ambas as variáveis estão como valor indefinido porque não foram atribuídos
valores a elas. */

// d.
nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

// e.
console.log(nome)
console.log(idade)
console.log(typeof(nome))
console.log(typeof(idade))

/*
O tipo das duas variáveis foi impresso como string. Acredito que seja porque o prompt de input do usuário foi inserido como texto, mesmo a idade sendo número.
*/

// f.
console.log("Olá", nome, ", você tem", idade, "anos")

// Exercício 2
let pergunta1
let pergunta2
let pergunta3
let pergunta4
let pergunta5

pergunta1 = prompt("Qual o seu endereço?")
console.log("1. Qual o seu endereço?")
console.log("Resposta:", pergunta1)

pergunta2 = prompt("Qual a sua cor favorita?")
console.log("2. Qual a sua cor favorita?")
console.log("Resposta:", pergunta2)

pergunta3 = prompt("Qual o seu filme favorito?")
console.log("3. Qual a seu filme favorito?")
console.log("Resposta:", pergunta3)

pergunta4 = prompt("Qual o seu livro favorito?")
console.log("4. Qual o seu livro favorito?")
console.log("Resposta:", pergunta4)

pergunta5 = prompt("Qual a sua banda favorita?")
console.log("5. Qual a sua banda favorita?")
console.log("Resposta:", pergunta5)

// Exercício 3
// a.
let comidas = ["lasanha", "strogonoff", "hamburguer", "sorvete", "alcachofra"]

// b.
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

// c. desafio
comidas[1] = prompt("Qual a sua comida favorita?")

console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

// Exercício 4
let perguntas = ["Você está vestindo preto?", "Você tem mais do que 30 anos de idade?", "Você almoçou arroz e feijão?"]


// a.
let respostas = [true, true, false]

// b.
console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])