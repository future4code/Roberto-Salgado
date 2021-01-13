import { findMissingNumber } from "../src/findMissingNumber";

describe.skip("Find Missing Number from sequential number 1 to 100 array", () => {

  test("Missing number: 47", () => {
    const arrayMissing47 = [];

    for (let i = 1; i <= 100; i++) {
      if (i !== 47) arrayMissing47.push(i);
    }

    expect(arrayMissing47.length).toEqual(99);
    expect(arrayMissing47).not.toContain(47);

    const result = findMissingNumber(arrayMissing47);

    expect(result).toEqual(47);
  });

  test("Missing number: 70", () => {
    const arrayMissing70 = [];

    for (let i = 1; i <= 100; i++) {
      if (i !== 70) arrayMissing70.push(i);
    }

    expect(arrayMissing70.length).toEqual(99);
    expect(arrayMissing70).not.toContain(70);

    const result = findMissingNumber(arrayMissing70);

    expect(result).toEqual(70);
  });

});

describe.skip("Find Missing Number from any sequential number array", () => {

  test("22 to 29 array missing 26", () => {
    const arr: number[] = [];

    const start: number = 22;
    const end: number = 29;

    for (let i: number = start; i <= end; i++) {
      if (i !== 26) arr.push(i);
    }

    expect(arr.length).toEqual(end - start);
    expect(arr).not.toContain(26);

    const result: number = findMissingNumber(arr);

    expect(result).toEqual(26);
  });

  test("13 to 666 array missing 42", () => {
    const arr: number[] = [];

    const start: number = 13;
    const end: number = 666;

    for (let i: number = start; i <= end; i++) {
      if (i !== 42) arr.push(i);
    }

    expect(arr.length).toEqual(end - start);
    expect(arr).not.toContain(42);

    const result: number = findMissingNumber(arr);

    expect(result).toEqual(42);
  });

});