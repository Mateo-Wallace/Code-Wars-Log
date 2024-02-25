const count = require("../index");

const Test = require("@codewars/test-compat");

describe("Basic tests index", function () {
  Test.assertEquals(count(5), 3);
  Test.assertEquals(count(50), 65);
  Test.assertEquals(count(500), 1135);
  Test.assertEquals(count(5000), 16326);
  Test.assertEquals(count(50000), 213237);
  Test.assertEquals(count(500000), 2632342);
  Test.assertEquals(count(5000000), 31323382);
  Test.assertEquals(count(50000000), 363233781);
});

describe("Random tests index", function () {
  for (let i = 0; i < 100; i++) {
    let n = Math.floor(Math.random() * 100000) + 1000; //
    Test.assertEquals(
      count(n),
      count_65MYxi(n),
      "It should work for random inputs too"
    );
  }
});

function count_65MYxi(n) {
  return (
    Math.floor(n * Math.log10(n / Math.E) + Math.log10(2 * Math.PI * n) / 2.0) +
    1
  );
}
