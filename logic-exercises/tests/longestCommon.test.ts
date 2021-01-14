import { longestCommon } from "../src/longestCommon";

describe("Longest Common Prefix", () => {

  test("Case 1 - Prefix: fl", () => {
    const result = longestCommon(["flower","flow","flight"]);

    expect(result).toBe("fl");
  });

  test("Case 2 - No common prefix", () => {
    const result = longestCommon(["dog","racecar","car"]);

    expect(result).toBe("");
  });

  test("Case 3 - Prefix: cor", () => {
    const result = longestCommon(["coracao","cor","corona", "coroa","coreia"]);

    expect(result).toBe("cor");
  });

});