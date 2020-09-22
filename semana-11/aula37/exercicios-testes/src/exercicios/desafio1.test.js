import { ordenaCrescente } from "./desafio1";

describe("Ordena array em ordem crescente", () => {
  test("Ordena o array [3, 2, 1]", () => {
    const resultado = ordenaCrescente([3, 2, 1]);

    expect(resultado).toEqual([1, 2, 3]);
  });

  test("Ordena o array [4, 7, 1, 3]", () => {
    const resultado = ordenaCrescente([4, 7, 1, 3]);

    expect(resultado).toEqual([1, 3, 4, 7]);
  });

  test("Ordena o array [20, -1, -4, 0, 6]", () => {
    const resultado = ordenaCrescente([20, -1, -4, 0, 6]);

    expect(resultado).toEqual([-4, -1, 0, 6, 20]);
  });
});
