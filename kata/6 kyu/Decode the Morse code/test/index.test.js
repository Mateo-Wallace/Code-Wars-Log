const decodeMorse = require("../index")
const { assert } = require("chai");

describe("Sample tests index", function () {
  it("Example from description", () => {
    assert.strictEqual(decodeMorse(".... . -.--   .--- ..- -.. ."), "HEY JUDE");
  });

  it("Leading and trailing spaces", () => {
    assert.strictEqual(decodeMorse("   .... . -.--   "), "HEY");
  });
});

// describe("Your own tests", function(){
//   it("Your test case", () => {
//     assert.strictEqual(decodeMorse(???), ???);
//   });
// });
