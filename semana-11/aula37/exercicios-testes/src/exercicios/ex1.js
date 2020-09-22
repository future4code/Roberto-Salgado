export function checaBissexto(ano) {
  return (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0;

  // Função do exemplo
  // if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}
