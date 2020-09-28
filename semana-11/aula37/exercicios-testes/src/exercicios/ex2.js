export function checaPalindromo(frase) {
  const fraseLimpa = frase.toLowerCase().replace(/[\W_]/g, "");

  const meio = Math.floor(fraseLimpa.length / 2);
  for (let i = 0; i < meio; i++)
    if (fraseLimpa[i] !== fraseLimpa[fraseLimpa.length - i - 1]) return false;
  return true;

  // Função do exemplo
  // return (
  //   frase ===
  //   frase
  //     .split("")
  //     .reverse()
  //     .join("")
  // );
}
