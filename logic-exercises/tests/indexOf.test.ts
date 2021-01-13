import { indexOf } from "../src/indexOf";

describe.skip("Index Of", () => {

  test("Find index of a character contained in a string", () => {
    const result = indexOf("Roberto de Abreu Salgado", "A");

    expect(result).toBe(11);
  });

  test("Find index of a query string contained in a source string", () => {
    const result = indexOf("Roberto de Abreu Salgado", "Abreu");

    expect(result).toBe(11);
  });

  test("Source string does not contain query string", () => {
    const result = indexOf("Roberto de Abreu Salgado", "z");

    expect(result).toBe(-1);
  });

});