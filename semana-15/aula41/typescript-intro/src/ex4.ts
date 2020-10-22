type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// a)
// Usaria o comando tsc no terminal

// b)
// Depois de configurado o ts com os caminhos para o rootDit e o outDir o
// comando tsc na raiz fará a transpilação dos arquivos .ts na pasta /src
// e enviará para os arquivos .js para a pasta /build.

// c)
// Todos os arquivos .ts serão transpilados após fazer o comando tsc na raiz.

// d)
// O arquivo do exemplo não tem as alterações que foram feitas em aula e na
// configuração do projeto para os exercícios.
// É arquivo padrão criado quando é dado tsc --init no terminal.