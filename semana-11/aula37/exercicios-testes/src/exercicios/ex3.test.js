import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  test("retorna true pra [1, 1]", () => {
    const resultado = checaItensDuplicados([1, 1]);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra [1, 2 ,1]", () => {
    const resultado = checaItensDuplicados([1, 2, 1]);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra [3, 3, 4, 4]", () => {
    const resultado = checaItensDuplicados([3, 3, 4, 4]);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra [5, 5, 3, 6, 5, 6]", () => {
    const resultado = checaItensDuplicados([5, 5, 3, 6, 5, 6]);

    expect(resultado).toEqual(true);
  });

  test("retorna false pra []", () => {
    const resultado = checaItensDuplicados([]);

    expect(resultado).toEqual(false);
  });

  test("retorna false pra [1]", () => {
    const resultado = checaItensDuplicados([1]);

    expect(resultado).toEqual(false);
  });

  test("retorna false pra [1, 2, 3]", () => {
    const resultado = checaItensDuplicados([1, 2, 3]);

    expect(resultado).toEqual(false);
  });

  test("retorna false pra [4, 3, 2, 1]", () => {
    const resultado = checaItensDuplicados([4, 3, 2, 1]);

    expect(resultado).toEqual(false);
  });

  test("retorna true pra [1, 1, 1]", () => {
    const resultado = checaItensDuplicados([1, 1, 1]);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra [0, 0, 0, 0, 0, 0, 0]", () => {
    const resultado = checaItensDuplicados([0, 0, 0, 0, 0, 0, 0]);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra [2, 2, 2, 2, 2]", () => {
    const resultado = checaItensDuplicados([2, 2, 2, 2, 2]);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra [2, 2, 2, 2, 2]", () => {
    const resultado = checaItensDuplicados([2, 0, 3, 4, 1, 2]);

    expect(resultado).toEqual(true);
  });
});
