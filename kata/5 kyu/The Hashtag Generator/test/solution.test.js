const generateHashtag = require("../solution");

const { assert } = require("chai");

describe("Tests solution", () => {
  it("Fixed tests", () => {
    assert.strictEqual(
      generateHashtag(""),
      false,
      "Expected an empty string to return false"
    );
    assert.strictEqual(
      generateHashtag(" ".repeat(200)),
      false,
      "Still an empty string"
    );
    assert.strictEqual(
      generateHashtag("Do We have A Hashtag"),
      "#DoWeHaveAHashtag",
      "Expected a Hashtag (#) at the beginning."
    );
    assert.strictEqual(
      generateHashtag("Codewars"),
      "#Codewars",
      "Should handle a single word."
    );
    assert.strictEqual(
      generateHashtag("Codewars Is Nice"),
      "#CodewarsIsNice",
      "Should remove spaces."
    );
    assert.strictEqual(
      generateHashtag("Codewars is nice"),
      "#CodewarsIsNice",
      "Should capitalize first letters of words."
    );
    assert.strictEqual(
      generateHashtag("code" + " ".repeat(140) + "wars"),
      "#CodeWars"
    );
    assert.strictEqual(
      generateHashtag(
        "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
      ),
      false,
      "Should return false if the final word is longer than 140 chars."
    );
    assert.strictEqual(
      generateHashtag("a".repeat(139)),
      "#A" + "a".repeat(138),
      "Should work"
    );
    assert.strictEqual(generateHashtag("a".repeat(140)), false, "Too long");
    assert.strictEqual(
      generateHashtag(
        "  a  bb  ccc  dddd  eeeee  ffffff  ggggggg  hhhhhhhh  iiiiiiiii  jjjjjjjjjj  kkkkkkkkkkk  llllllllllll  mmmmmmmmmmmmm  nnnnnnnnnnnnnn  ooooooooooooooo  pppppppppppppppp  qqq"
      ),
      "#ABbCccDdddEeeeeFfffffGggggggHhhhhhhhIiiiiiiiiJjjjjjjjjjKkkkkkkkkkkLlllllllllllMmmmmmmmmmmmmNnnnnnnnnnnnnnOooooooooooooooPpppppppppppppppQqq",
      "Should look at the resulting length"
    );
  });

  it("Random tests", () => {
    const rnd = (a) => Math.floor(Math.random() * a);
    const letters = "aabcdeeefghiijklmnoopqrstuuvwxyz";
    for (let _ = 0; _ < 75; ++_) {
      let input = Array.from({ length: rnd(12) }, () =>
        Array.from({ length: rnd(6) }, () => letters[rnd(letters.length)]).join(
          ""
        )
      ).join(" ");
      let expected =
        "#" +
        input
          .trim()
          .split(/\s+/)
          .map((w) => w && w[0].toUpperCase() + w.slice(1))
          .join("");
      expected = expected.length > 1 && expected.length <= 140 && expected;
      assert.strictEqual(
        generateHashtag(input),
        expected,
        JSON.stringify(input)
      );
    }
  });
});
