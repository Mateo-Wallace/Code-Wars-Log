const reverseOrder = require("../index");

const { strictEqual, deepEqual } = require("chai").assert;

describe("Basic Tests", function () {
  function doTest(n1, n2, expected) {
    const actual = reverseOrder(n1, n2);
    deepEqual(actual, expected);
  }

  it("should be a function", function () {
    strictEqual(typeof reverseOrder, "function");
  });

  it("should return an array", function () {
    strictEqual(Array.isArray(reverseOrder(1, 2)), true);
  });

  it("should return the correct array", function () {
    doTest(0, 5, [5, 4, 3, 2, 1, 0]);
    doTest(5, 7, [7, 6, 5]);
    doTest(1, 1, [1]);
    doTest(-3, 2, [2, 1, 0, -1, -2, -3]);
  });

  // it("EXTRA TESTS", function () {
  //   // return numbers if given string
  //   doTest("5", "7", [7, 6, 5]);
  //   // reverse array if high and low are switched
  //   doTest(5, 4, [4, 5]);
  // });
});
