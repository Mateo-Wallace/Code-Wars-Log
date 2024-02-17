const digitalRoot = require("../index")
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests index", () => {
  it("test", () => {
    assert.strictEqual( digitalRoot(16), 7 )
    assert.strictEqual( digitalRoot(456), 6 )
  });
});