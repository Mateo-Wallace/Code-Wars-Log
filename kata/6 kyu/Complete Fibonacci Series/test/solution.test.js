const fibonacci = require("../solution");

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(fibonacci(5).length, 5, "Expected 5 elements");
    Test.assertEquals(
      fibonacci(5)[4],
      3,
      "Last element for input 5 should be 3"
    );
    Test.assertEquals(
      fibonacci(13)[12],
      144,
      "Last element for input 13 should be 144"
    );
    Test.assertEquals(
      fibonacci(-5).length,
      0,
      "Expected 0 elements for negative input"
    );
    Test.assertEquals(
      fibonacci(0).length,
      0,
      "Expected 0 elements for 0 input"
    );

    function sol(n) {
      if (n <= 0) return [];
      let fib = [0, 1];
      for (let i = 2; i < n; i++)
        fib.push(fib.slice(fib.length - 2).reduce((a, b) => a + b));
      return fib;
    }

    for (let i = 0; i < 500; i++) {
      let p = Math.floor(-1000 + Math.random() * 20000 + 1);
      testSeries = sol(p);
      victimSeries = fibonacci(p);
      testOutput = victimSeries.every(function (val, i) {
        return val == testSeries[i];
      });
      Test.assertEquals(
        testOutput,
        true,
        "Series is not completely correct for input " +
          p +
          ". Expected: " +
          testSeries.join(",")
      );
    }
  });
});
