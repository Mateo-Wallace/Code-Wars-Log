const digitalRoot = require("../solution")
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests solution", () => {
  it("test", () => {
    assert.strictEqual( digitalRoot(16), 7 )
    assert.strictEqual( digitalRoot(456), 6 )
  });
});