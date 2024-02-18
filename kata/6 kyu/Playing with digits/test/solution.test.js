const digPow = require("../solution");
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests solution", () => {
  it("test", () => {
    assert.strictEqual(digPow(89, 1), 1);
    assert.strictEqual(digPow(92, 1), -1);
    assert.strictEqual(digPow(46288, 3), 51);
  });
});
