export const findMissingNumber = (arr: number[]): number => {
  arr.sort((a, b) => a - b);

  const expectedSum = ((arr.length + 1) / 2) * (arr[0] + arr[arr.length - 1]);

  let sum = 0;
  
  for (const num of arr) {
    sum += num;
  }

  return expectedSum - sum;
};