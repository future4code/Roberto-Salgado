export const isValidSudoku = (board: string[][]): boolean => {
  let filledValues: Set<string> = new Set();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const currentValue = board[i][j];

      if (currentValue !== ".") {
        const row = `${currentValue} in row ${i}`;
        const column = `${currentValue} in column ${j}`;
        const boxIndex = (Math.floor(i / 3) * 3) + Math.floor(j / 3);
        const box = `${currentValue} in box ${boxIndex}`;

        if (
          filledValues.has(row) || 
          filledValues.has(column) || 
          filledValues.has(box)
        ) return false;

        filledValues.add(row).add(column).add(box);
      }
    }
  }

  return true;
};