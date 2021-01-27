export const countNegativesInSortedMatrix = (matrix: number[][]): number => {
  let count: number = 0;

  let row: number = matrix.length -1;
  let column: number = 0;

  while (row >= 0 && column < matrix[0].length) {
    if (matrix[row][column] < 0) {
      count += matrix.length - column;
      row--;
    } else {
      column ++;
    }
  }

  return count;
};