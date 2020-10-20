// e)
enum ARCO_IRIS {
  VIOLETA = "violeta",
  ANIL = "anil",
  AZUL = "azul",
  VERDE = "verde",
  AMARELO = "amarelo",
  LARANJA = "laranja",
  VERMELHO = "vermelho"
}


// a)
const minhaString: string = "Minha string" // Não consigo atribuir nenhum outro tipo de valor que não seja string.

// b)
const meuNumero: number = 33 // Para que esta variável aceita strings também devo declará-la como meuNumero: number | string

// c)
// const pessoa: {
//   nome: string,
//   idade: number,
//   corFavorita: string
// } = {
//   nome: "Roberto",
//   idade: 34,
//   corFavorita: "roxo"
// }

type pessoa = {
  nome: string,
  idade: number,
  corFavorita: ARCO_IRIS
}

const eu: pessoa = {
  nome: "Roberto",
  idade: 34,
  corFavorita: ARCO_IRIS.VIOLETA
}

// d)
const namorada: pessoa = {
  nome: "Gabi",
  idade: 36,
  corFavorita: ARCO_IRIS.VERMELHO
}

const mae: pessoa = {
  nome: "Miriam",
  idade: 68,
  corFavorita: ARCO_IRIS.VERDE
}

const pai: pessoa = {
  nome: "Juca",
  idade: 70,
  corFavorita: ARCO_IRIS.LARANJA
}