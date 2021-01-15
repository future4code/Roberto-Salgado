import { houseRobber } from "../src/houseRobber"

describe("House Robber", () => {

  test("Case 1 - houses: [1,2,3,1]", () => {
    expect(houseRobber([1,2,3,1])).toBe(4);
  });

  test("Case 2 - houses: [2,7,9,3,1]", () => {
    expect(houseRobber([2,7,9,3,1])).toBe(12);
  });

  test("Case 3 - houses: [2,3,6,12,3,9,11,4]", () => {
    expect(houseRobber([2,3,6,12,3,9,11,4])).toBe(28);
  });

  test("Case 4 - houses: [3,1,2,5,4,2]", () => {
    expect(houseRobber([3,1,2,5,4,2])).toBe(10);
  });

  test("Case 5 - houses: [4,1,5,1,8,1,6]", () => {
    expect(houseRobber([4,1,5,1,8,1,6])).toBe(23);
  });

  test("Case 6 - houses: [3,1,1,6,1,1,7]", () => {
    expect(houseRobber([3,1,1,6,1,1,7])).toBe(16);
  });

});