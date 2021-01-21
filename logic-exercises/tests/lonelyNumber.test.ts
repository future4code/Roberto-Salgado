import { lonelyNumber } from "../src/lonelyNumber"

describe.skip("Indentify the number that is not paired in an array", () => {

  test("Case 1: [2,2,1] - 1", () => {
    const result = lonelyNumber([2,2,1]);

    expect(result).toBe(1);
  })

  test("Case 2: [4,1,2,1,2] - 4", () => {
    const result = lonelyNumber([4,1,2,1,2]);

    expect(result).toBe(4);
  })

})