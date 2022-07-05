import { isSet } from "../src/isSet.js";

describe("isSet", () => {
  test("should return true for a set type", () => {
    expect(isSet(new Set())).toBe(true);
  });

  test("should return false for a non set type", () => {
    expect(isSet({})).toBe(false);
  });
});
