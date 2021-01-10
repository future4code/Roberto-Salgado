// a.
// Podemos representar uma matriz como um array de array de números (number[][]).

// Exemplo:
const matrix: number [][] = 
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];


// b.
function replaceMatrixValue (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};

console.log(matrix);

replaceMatrixValue(matrix, 0, 0, 22);

console.log(matrix);

replaceMatrixValue(matrix, 2, 1, 33);

console.log(matrix);

replaceMatrixValue(matrix, 2, 3, 55);

console.log(matrix);