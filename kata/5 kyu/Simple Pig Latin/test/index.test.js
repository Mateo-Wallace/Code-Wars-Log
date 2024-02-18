const pigIt = require("../index");
const { strictEqual } = require("chai").assert;

describe("tests index", function () {
  function doTest(input, expected) {
    const actual = pigIt(input);
    strictEqual(actual, expected);
  }

  it("sample tests", function () {
    doTest("Pig latin is cool", "igPay atinlay siay oolcay");
    doTest("This is my string", "hisTay siay ymay tringsay");
    doTest("Wow !", "owWay !");
  });
});
