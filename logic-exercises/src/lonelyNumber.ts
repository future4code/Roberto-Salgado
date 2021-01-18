export const lonelyNumber = (arr: number[]): number => {
  const hashTable: {[index: number]: boolean} = {};

  for (let i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]]) {
      delete hashTable[arr[i]];
    } else {
      hashTable[arr[i]] = true;
    }
  }

  return Number(Object.keys(hashTable)[0]);
};