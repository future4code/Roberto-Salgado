export const twoSum = (
  nums: number[],
  target: number
): number[] | undefined => {
  let hash: {[index: number]: number} = {};

  for (let i = 0; i < nums.length; i++ ) {
    const diff = target - nums[i];

    if (diff in hash) {
      return [hash[diff], i];
    }

    hash[nums[i]] = i;
  }
}