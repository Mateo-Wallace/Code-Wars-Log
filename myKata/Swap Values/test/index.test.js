const swapValues = require("../index");

const { strictEqual, deepEqual } = require("chai").assert;

describe("Basic Tests", function () {
  function doTest(n1, n2, expected) {
    const actual = swapValues(n1, n2);
    deepEqual(actual, expected);
  }

  it("should be a function", function () {
    strictEqual(typeof swapValues, "function");
  });

  it("should return an array", function () {
    strictEqual(Array.isArray(swapValues(1, 2)), true);
  });

  it("should return the correct array", function () {
    doTest(0, 5, [5, 0]);
    doTest("Hello", "World", ["World", "Hello"]);
    doTest(true, false, [false, true]);
    doTest(null, undefined, [undefined, null]);
    const [a, b] = [[0, 1], [1, 0]];
    const res = [b, a];
    doTest(a, b, res);
  });
});
