const factorial = require("../solution");

const Test = require("@codewars/test-compat");

describe("Tests solution", () => {
  it("test", () => {
    let testCases = [
      () => Test.assertEquals(factorial(0), 1, "factorial for 0 is 1"),
      () => Test.assertEquals(factorial(1), 1, "factorial for 1 is 1"),
      () => Test.assertEquals(factorial(2), 2, "factorial for 2 is 2"),
      () => Test.assertEquals(factorial(3), 6, "factorial for 3 is 6"),
      () => Test.assertEquals(factorial(4), 24, "factorial for 4 is 24"),
      () => Test.assertEquals(factorial(5), 120, "factorial for 5 is 120"),
      () => Test.assertEquals(factorial(6), 720, "factorial for 6 is 720"),
      () => Test.assertEquals(factorial(7), 5040, "factorial for 7 is 5040"),
      () => Test.assertEquals(factorial(8), 40320, "factorial for 8 is 40320"),
      () =>
        Test.assertEquals(factorial(9), 362880, "factorial for 9 is 362880"),
      () =>
        Test.assertEquals(
          factorial(10),
          3628800,
          "factorial for 10 is 3628800"
        ),
      () =>
        Test.assertEquals(
          factorial(11),
          39916800,
          "factorial for 11 is 39916800"
        ),
      () =>
        Test.assertEquals(
          factorial(12),
          479001600,
          "factorial for 12 is 479001600"
        ),
      () =>
        Test.expectError("Should throw RangeError", function () {
          factorial(-1);
        }),
      () =>
        Test.expectError("Should throw RangeError", function () {
          factorial(-100);
        }),
      () =>
        Test.expectError("Should throw RangeError", function () {
          factorial(22);
        }),
    ];

    // Fisher-Yates Shuffle
    function shuffle(array) {
      var m = array.length,
        t,
        i;

      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    }

    shuffle(testCases);
    testCases.forEach((v) => v());
  });
});
