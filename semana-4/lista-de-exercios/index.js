// ### --- Lista de Exercícios: --- ###

// ------------------------ Exercícios de interpretação de código

// --- 1.
// Cria uma função que pergunta o valor da cotação atual do dólar, retorna o 
// valor de dolar solicitado no argumento da função multiplicado pela cotação 
// e antecedido da notação de Real, executa a função para 100 dólares, 
// armazenando em uma nova constante e depois imprime este valor no console.

// --- 2.
// Cria uma função que recebe um tipo de investimento e um valor. Então roda 
// uma condicional para cada tipo de investimento, alertanto o usuário para
// tipos inválidos, e, para cada caso, multiplica o valor do argumento pelo
// valor referente a cada tipo. Então, retorno o valor após a operação. Depois
// gera duas novas constantes, chamando a função para testar valores 
// diferentes para tipos de investimento diferentes e imprime estes dois 
// valores na tela. 

// --- 3.
// Dado um array de vários números, ele gera dois novos array vazios e roda
// um loop para verificar cada número do array inicial e, caso seja par 
// colocar este número no array1, e, caso não seja (número ímpar), o coloca 
// no array2. Depois imprime a quantidade de elementos no array números e os 
// array de números pares e os ímpares.

// --- 4.
// Dada um array de números, o código gera dois novos números, um com valor 
// infinito e outro com valor zero. Aí é rodado um laço em que cada número do 
// array é verificado por duas condicionais. A primeira testa se este número é 
// menor ao armazenado na variável numero 1 e, se for, atualiaza a variável 
// com este novo número. A segunda condicional testa se o número é maior ao 
// armazenado na variável numero2 e, se for, atribui o número a esta variável. 
// Ou seja, o laço atualiza a a variável numero1 com o menor valor do array 
// numeros e a variável numero2 com o mairo valor deste array. Ao final, ele 
// imprime os dois valores no console.

// ---

// ------------------------ Exercícios de Lógica de Programação

// --- 1.
// Podemos usar os laços while, for (nos quais o começo seja um índice da 
// lista e a condição seja uma comparação com seu comprimento), ou for...of 
// (no qual podemos percorrer por cada elemento de uma lista).
// 
// Também podemos usar as funções de array forEach() (que executará uma 
// função callback para cada elemento da lista) ou map() (que gera um novo 
// array iterando cada elemento do array original por uma função callback).

// // Exemplos:
// const familia = ["Miriam", "Juca", "Roberto", "Ricardo", "Marcelo"]
// let i = 0

// // while:
// while (i < familia.length) {
//   console.log(familia[i])
//   i ++
// }

// // for:
// for (i = 0 ; i < familia.length; i++) {
//   console.log(familia[i])
// } 

// // for...of:
// for (membro of familia) {
//   console.log(membro)
// }

// // forEach:
// familia.forEach((membro, indice, lista) => console.log(membro))

// // map():
// const descricaoFamilia = familia.map((membro, indice, lista) => {
//   if (indice === 0) {
//     membro = "Mãe: " + membro
//   } else if (indice === 1) {
//     membro = "Pai: " + membro
//   } else {
//     membro = "Filho: " + membro
//   }
//   console.log(membro)
// })


// --- 2.
// const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2 // => true
// const booleano4 = !booleano3 // => false

// a. false
// b. true
// c. true
// d. true
// e. true


// --- 3.
// O código não funcionaria porque nenhum valor foi atribuido a const.
// 
// Além disso, o laço while entraria em loop infinito, já que o valor de i 
// não está sendo incrementado e sempre será true a condicional.

// const quantidadeDeNumerosPares = prompt("Digite a quantidade de pares que deseja:")
// let i = 0
// while(i <= quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i ++
// }


// --- 4.
// const ladoA = prompt("Lado A do triângulo:")
// const ladoB = prompt("Lado B do triângulo:")
// const ladoC = prompt("Lado C do triângulo:")
// const a = Number(ladoA)
// const b = Number(ladoB)
// const c = Number(ladoC)
// let tipoTriangulo = ""
// if (a === b && b === c) {
//   tipoTriangulo = "Equilátero"
// } else if (a === b || b === c || a === c) {
//   tipoTriangulo = "Isóceles"
// } else {
//   tipoTriangulo = "Escaleno"
// }
// console.log(tipoTriangulo)


// --- 5.
// const numero1 = Number(prompt("Digite o 1º número:"))
// const numero2 = Number(prompt("Digite o 2º número:"))

// if (numero1 > numero2) {
//   console.log("O maior é:", numero1)
// } else if (numero1 < numero2) {
//   console.log("O maior é:", numero2)
// } else {console.log("Os números são iguais")}

// let divisao1 = 0
// if (numero1 % numero2 === 0) {
//   divisao1 = numero1 + " é divisível por " + numero2
// } else {
//   divisao1 = numero1 + " não é divisível por " + numero2
// }
// console.log(divisao1)

// let divisao2 = 0
// if (numero2 % numero1 === 0) {
//   divisao2 = numero2 + " é divisível por " + numero1
// } else {
//   divisao2 = numero2 + " não é divisível por " + numero1
// }
// console.log(divisao2)

// let diferenca = numero1 - numero2
// if (diferenca < 0) {
//   diferenca *= -1
// }
// console.log("A diferença entre eles é", diferenca)


// ---

// ------------------------- Exercícios de Funções

// --- 1.

// function segundoMaiorMenor(array) {
//   let maior = -Infinity
//   let segundoMaior = -Infinity
//   let menor = Infinity
//   let segundoMenor = Infinity
//   for (numero of array) {
//     if (numero > maior) {
//       segundoMaior = maior
//       maior = numero
//     } else if (numero < maior && numero > segundoMaior) {
//       segundoMaior = numero
//     } else if (numero < menor) {
//       segundoMenor = menor
//       menor = numero
//     } else if (numero > menor && numero < segundoMenor) {
//       segundoMenor = numero
//     }
//   }
//   const resultado = [segundoMaior, segundoMenor]
//   return resultado
// }

// const listaNumeros = [11, 12, 13, 14, 15, 16, 17, 18, 19, 50, 52, 2, 3, 100, -50, 523, -101]
// resultado = segundoMaiorMenor(listaNumeros)
// console.log(resultado[0])
// console.log(resultado[1])


// --- 2.
// let mensagem = () => {
//   alert("Hello Labenu")
// }

// mensagem()

// ---

// ------------------------- Exercícios de Objetos

// --- 1.
// Arrays são elementos que armazenam vários dados, como uma lista.
// Objetos são elementos que armazenam um item que tenham várias propriedades.
// Arrays podem ser usados para quando precisamos armazenar vários dados similares.
// Obejtos podem ser usados para armazenar um item que contenham vários dados.
// Inclusive, podemos fazer um array de objetos.


// --- 2.
// function criarRetangulo(lado1, lado2) {
//   const retangulo = {
//     largura: lado1,
//     altura: lado2,
//     perimetro: 2 * (lado1 + lado2),
//     area: lado1 * lado2
//   }
//   return retangulo
// }

// retangulo1 = criarRetangulo(8, 5)
// console.log(retangulo1)


// --- 3.
const filmeFavorito = {
  titulo: "Drive",
  ano: 2011,
  diretor: "Nicolas Winding Refn",
  atorPrincipal: "Ryan Gosling",
  atrizPrincipal: "Carey Mulligan",
  atorCoadjuvante: "Albert Brooks",
  atrizCoadjuvante: "Christina Hendricks"
}

const mensagem = "Venha assistir ao " + filmeFavorito.titulo + ", de " + 
  filmeFavorito.ano + ", dirigido por " + filmeFavorito.diretor + 
  " e  estrelado por " + filmeFavorito.atorPrincipal + ", " + 
  filmeFavorito.atrizPrincipal + ", " + filmeFavorito.atorCoadjuvante + 
  " e " + filmeFavorito.atrizCoadjuvante + "."
console.log(mensagem)


// ---

// ------------------------- Exercícios de Funções de array