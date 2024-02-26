const alphanumeric = require("../index");

const { assert } = require("chai");

describe("All tests index", () => {
  function dotest(input, expected) {
    assert.strictEqual(
      alphanumeric(input),
      expected,
      `Incorrect answer for string="${input}"`
    );
  }

  it("Basic tests", function () {
    dotest("Mazinkaiser", true);
    dotest("hello world_", false);
    dotest("PassW0rd", true);
    dotest("     ", false);
    dotest("", false);
    dotest("\n\t\n", false);
    dotest("ciao\n$$_", false);
    dotest("__ * __", false);
    dotest("&)))(((", false);
    dotest("43534h56jmTHHF3k", true);
  });

  it("Random tests", function () {
    let base =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 _!";
    function randint(a, b) {
      return Math.floor(Math.random() * (b - a + 1) + a);
    }
    function sol(string) {
      return /^[A-Za-z0-9]+$/.test(string);
    }
    for (let _ = 0; _ < 40; _++) {
      let string = [],
        stringlen = randint(1, 30);
      for (let j = 0; j < stringlen; j++) {
        string.push(base[randint(0, base.length - 1)]);
      }
      string = string.join("");
      dotest(string, sol(string));
    }
  });
});
