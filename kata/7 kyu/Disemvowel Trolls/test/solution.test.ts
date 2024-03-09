import solution = require("../src/solution");
import { assert } from "chai";

describe("disemvowel", function () {
  it("should pass a sample test", function () {
    assert.strictEqual(
      solution.Kata.disemvowel("This website is for losers LOL!"),
      "Ths wbst s fr lsrs LL!"
    );
  });

  it("should pass some fixed tests", function () {
    assert.strictEqual(
      solution.Kata.disemvowel(
        "No offense but,\nYour writing is among the worst I've ever read"
      ),
      "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
    );
    assert.strictEqual(
      solution.Kata.disemvowel("What are you, a communist?"),
      "Wht r y,  cmmnst?"
    );
  });

  it("should pass some random tests", function () {
    for (let i = 0; i < 100; ++i) {
      let str = Array.apply(null, new Array(~~(Math.random() * 300)))
        .map((_) => String.fromCharCode(~~(Math.random() * 256)))
        .join("");

      let actual = solution.Kata.disemvowel(str);
      let expected = str.replace(/[aeiou]/gi, "");

      assert.strictEqual(actual, expected);
    }
  });
});
