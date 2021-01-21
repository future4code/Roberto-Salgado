import { twoSum } from "../src/twoSum";

describe.skip(
  "Return indices of the two numbers in a given array that add up to a given target",
  () => {

  test("Case 1 - [2, 7, 11, 15], target = 9: [0,1]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0,1]);
  });

  test("Case 2 - [4, 5, 10, 12, 21], target = 17: [1,3]", () => {
    expect(twoSum([4, 5, 10, 12, 21], 17)).toEqual([1,3]);
  });

});