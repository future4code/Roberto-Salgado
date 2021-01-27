import { isAnagram } from "../src/isAnagram"

describe.skip("Given two strings, check if they are anagrams of each other", () => {

  test("Case 1 - 1st: anagrama, 2nd: nagarama", () => {
    const result = isAnagram("anagrama", "nagarama");

    expect(result).toEqual(true);
  })

  test("Case 2 - 1st: gato, 2nd: toga", () => {
    const result = isAnagram("gato", "toga");

    expect(result).toEqual(true);
  })

  test("Case 3 - 1st: gato, 2nd: rato", () => {
    const result = isAnagram("gato", "rato");

    expect(result).toEqual(false);
  })

})