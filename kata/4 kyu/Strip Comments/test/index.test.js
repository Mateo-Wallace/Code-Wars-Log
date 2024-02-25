const solution = require("../index");

const { assert } = require("chai");
const _ = require("lodash");

describe("Submission Tests index", function () {
  function runTest(text, markers, expected) {
    let message = `Input:\n text = ${JSON.stringify(
      text
    )}\n markers = ${JSON.stringify(markers)}\nAssertion`;
    let actual = solution(text, markers);
    assert.strictEqual(actual, expected, message);
  }

  it("Fixed Tests", function () {
    const tests = [
      ["aa bb cc", [], "aa bb cc"],
      ["aa bb cc  ", [], "aa bb cc"],
      ["  aa bb cc", [], "  aa bb cc"],
      ["  aa # bb # cc  ", [], "  aa # bb # cc"],

      ["aa bb cc", ["#"], "aa bb cc"],
      ["aa bb # cc", ["#"], "aa bb"],
      ["aa# bb cc", ["#"], "aa"],
      ["aa #bb cc", ["#"], "aa"],
      ["aa # bb # cc", ["#"], "aa"],
      ["#aa bb cc", ["#"], ""],

      ["#aa bb\ncc dd", ["#"], "\ncc dd"],
      ["aa # bb\ncc dd", ["#"], "aa\ncc dd"],
      ["aa bb\n#cc dd", ["#"], "aa bb\n"],
      ["aa bb\ncc # dd", ["#"], "aa bb\ncc"],
      ["aa bb\ncc dd#", ["#"], "aa bb\ncc dd"],

      ["aa bb\ncc dd", ["#", "!"], "aa bb\ncc dd"],
      ["aa # bb\ncc dd", ["#", "!"], "aa\ncc dd"],
      ["aa bb\ncc ! dd", ["#", "!"], "aa bb\ncc"],
      ["#aa bb\n!cc dd", ["#", "!"], "\n"],
      ["aa ! bb\ncc # dd", ["#", "!"], "aa\ncc"],
      ["aa bb#\ncc dd!", ["#", "!"], "aa bb\ncc dd"],

      ["aa + bb\ncc - dd\nee * ff", ["+", "-", "*"], "aa\ncc\nee"],
      ["aa / bb\ncc ^ dd\nee $ ff", ["/", "^", "$"], "aa\ncc\nee"],
    ];

    tests.forEach(([text, markers, expected]) =>
      runTest(text, markers, expected)
    );
  });

  it("Random Tests", function () {
    const MARKERS = "!#$%*+-/@\\^~";
    const ALPHABET =
      " ABCDEFGHIJKLMNOPQRSTUCWXYZabcdefghijklmnopqrstucwxyz " + MARKERS;
    const tests = Array.from({ length: 100 }, randomTest);
    tests.forEach(([text, markers, expected]) =>
      runTest(text, markers, expected)
    );

    function randomTest() {
      let markers = _.sampleSize(MARKERS, _.random(0, MARKERS.length));
      let text = Array.from({ length: _.random(1, 4) }, randomLine);
      let expected = text.map((line) => {
        let i = 0;
        for (; i < line.length; i++) if (markers.includes(line[i])) break;
        return line.slice(0, i).trimEnd();
      });
      return [text.join("\n"), markers, expected.join("\n")];
    }

    function randomLine() {
      return Array.from({ length: _.random(0, 32) }, randomChar).join("");
    }

    function randomChar() {
      return _.sample(ALPHABET);
    }
  });
});
