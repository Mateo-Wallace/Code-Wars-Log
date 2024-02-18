const score = require("../solution");

const Test = require("@codewars/test-compat");

describe("Scorer Function solution", function () {
  it("should value this as worthless", function () {
    Test.assertEquals(
      score([2, 3, 4, 6, 2]),
      0,
      "Incorrect answer for dice = [2, 3, 4, 6, 2]"
    );
  });

  it("should value these triplets correctly", function () {
    Test.assertEquals(
      score([1, 1, 1, 3, 3]),
      1000,
      "Incorrect answer for dice = [1, 1, 1, 3, 3]"
    );
    Test.assertEquals(
      score([2, 2, 2, 3, 3]),
      200,
      "Incorrect answer for dice = [2, 2, 2, 3, 3]"
    );
    Test.assertEquals(
      score([3, 3, 3, 3, 3]),
      300,
      "Incorrect answer for dice = [3, 3, 3, 3, 3]"
    );
    Test.assertEquals(
      score([4, 4, 4, 3, 3]),
      400,
      "Incorrect answer for dice = [4, 4, 4, 3, 3]"
    );
    Test.assertEquals(
      score([5, 5, 5, 3, 3]),
      500,
      "Incorrect answer for dice = [5, 5, 5, 3, 3]"
    );
    Test.assertEquals(
      score([6, 6, 6, 3, 3]),
      600,
      "Incorrect answer for dice = [6, 6, 6, 3, 3]"
    );
  });

  it("should value these mixed sets correctly", function () {
    Test.assertEquals(
      score([1, 1, 1, 1, 3]),
      1100,
      "Incorrect answer for dice =  [1, 1, 1, 1, 3]"
    );
    Test.assertEquals(
      score([1, 1, 1, 1, 5]),
      1150,
      "Incorrect answer for dice =  [1, 1, 1, 1, 5]"
    );
    Test.assertEquals(
      score([2, 4, 4, 5, 4]),
      450,
      "Incorrect answer for dice =  [2, 4, 4, 5, 4]"
    );
    Test.assertEquals(
      score([3, 4, 5, 3, 3]),
      350,
      "Incorrect answer for dice =  [3, 4, 5, 3, 3]"
    );
    Test.assertEquals(
      score([1, 5, 1, 3, 4]),
      250,
      "Incorrect answer for dice =  [1, 5, 1, 3, 4]"
    );
  });
});
