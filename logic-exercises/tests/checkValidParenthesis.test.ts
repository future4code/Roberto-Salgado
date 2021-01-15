import { checkValidParenthesis } from "../src/checkValidParenthesis"

describe("Check Valid Parenthesis", () => {

  test("() returns true", () => {
    const result = checkValidParenthesis("()");

    expect(result).toBe(true);
  });

  test("()[]{} returns true", () => {
    const result = checkValidParenthesis("()[]{}");

    expect(result).toBe(true);
  });

  test("(] returns false", () => {
    const result = checkValidParenthesis("(]");

    expect(result).toBe(false);
  });

  test("([)] returns true", () => {
    const result = checkValidParenthesis("([)]");

    expect(result).toBe(false);
  });

  test("{[]} returns true", () => {
    const result = checkValidParenthesis("{[]}");

    expect(result).toBe(true);
  });

  test("( returns true", () => {
    const result = checkValidParenthesis("(");

    expect(result).toBe(false);
  });

});