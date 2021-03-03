const { isInteger } = require("../utils/utils");

describe("Validate Input", () => {
  test("Should be an integer", () => {
    expect(isInteger(6)).toBe(true);
  });

  test("Should not be a float number", () => {
    expect(isInteger(5.5)).toBe(false);
  });

  test("Should not be an empty value", () => {
    expect(isInteger("")).toBe(false);
  });
});
