export function checaItensDuplicados(array) {
  const filterdArray = array.filter(
    (item, index) => array.indexOf(item) !== index
  );
  return filterdArray.length > 0;

  // Função original
  // const map = {};
  // array.forEach(n => (map[n] = map[n] === undefined ? false : !map[n]));
  // return Object.values(map).some(n => !!n);
}
