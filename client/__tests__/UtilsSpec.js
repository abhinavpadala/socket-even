import { isInteger } from "../utils/utils.js";

describe("Validate Input", () => {
  it("should be an integer", () => {
    expect(isInteger(6).toBe(true));
  });
});
