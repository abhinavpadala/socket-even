const { isEvenNumber } = require("../utils/utils");

describe("Check if a number is even or not", () => {
  test("Return true if even", () => {
    expect(isEvenNumber(4)).toBe(true);
  });

  test("Return false if not even", () => {
    expect(isEvenNumber(5)).toBe(false);
  });

  test("Return false if empty string", () => {
    expect(isEvenNumber("")).toBe(false);
  });
});
