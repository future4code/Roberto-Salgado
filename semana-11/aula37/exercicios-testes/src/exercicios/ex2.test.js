import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'arara'", () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'asa'", () => {
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'Socorram-me subi no onibus em marrocos'", () => {
    const ehPalindromo = checaPalindromo(
      "Socorram-me subi no onibus em marrocos"
    );
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'Roma me tem amor'", () => {
    const ehPalindromo = checaPalindromo("Roma me tem amor");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'Rir, o breve verbo rir'", () => {
    const ehPalindromo = checaPalindromo("Rir, o breve verbo rir");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'Laço bacana para panaca boçal'", () => {
    const ehPalindromo = checaPalindromo("Laço bacana para panaca boçal");
    expect(ehPalindromo).toEqual(true);
  });
});
