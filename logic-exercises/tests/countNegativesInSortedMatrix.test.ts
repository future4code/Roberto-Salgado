import { countNegativesInSortedMatrix } from "../src/countNegativesInSortedMatrix";

describe("Return negative count from descending order wise sorted matrix", () => {

  test("Case 1 - [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]: 8", () => {
    expect(
      countNegativesInSortedMatrix(
        [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
      )
    ).toBe(8);
  });

  test("Case 2 - [[3,2],[1,0]]: 0", () => {
    expect(
      countNegativesInSortedMatrix(
        [[3,2],[1,0]]
      )
    ).toBe(0);
  });

  test("Case 3 - [[1,-1],[-1,-1]]: 3", () => {
    expect(
      countNegativesInSortedMatrix(
        [[1,-1],[-1,-1]]
      )
    ).toBe(3);
  });

  test("Case 4 - [[-1]]: 1", () => {
    expect(
      countNegativesInSortedMatrix(
        [[-1]]
      )
    ).toBe(1);
  });

});