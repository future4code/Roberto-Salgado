import { palavrasMaiusculas } from "./desafio2";

describe("Retorna todas as palavras da frase com letra maiúscula", () => {
  test("Frase: 'ola'", () => {
    const resultado = palavrasMaiusculas("ola");

    expect(resultado).toEqual("Ola");
  });

  test("Frase: 'ola, mundo'", () => {
    const resultado = palavrasMaiusculas("ola, mundo");

    expect(resultado).toEqual("Ola, Mundo");
  });

  test("Frase: 'eu sou o bob, aluno da labenu'", () => {
    const resultado = palavrasMaiusculas("eu sou o bob, aluno da labenu");

    expect(resultado).toEqual("Eu Sou O Bob, Aluno Da Labenu");
  });
});
