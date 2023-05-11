const assert = require("assert");
const { isLess } = require("../index.js");

describe("isLess function", () => {
  it("should return the lesser of two numbers", () => {
    expect(isLess(1, 4)()).toBe(1);
    expect(isLess(-5, 10)()).toBe(-5);
    expect(isLess(3.14, 3.1415)()).toBe(3.14);
    expect(isLess(42, 42)()).toBe(42);
  });

  it("should return the smallest number from the last two elements of the array", () => {
    const result = isLess(1, 7, 3, 4, 6, 3)(-2);
    assert.strictEqual(result, 3);
  });

  it("should throw an error if a non-number argument is provided", () => {
    expect(() => isLess(1, "2")()).toThrow(TypeError);
    expect(() => isLess(NaN, 2)()).toThrow(TypeError);
    expect(() => isLess(1, undefined)()).toThrow(TypeError);
  });
});
