"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution = require("../src/index");
const chai_1 = require("chai");
describe("disemvowel", function () {
    it("should pass a sample test", function () {
        chai_1.assert.strictEqual(solution.Kata.disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
    });
    it("should pass some fixed tests", function () {
        chai_1.assert.strictEqual(solution.Kata.disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
        chai_1.assert.strictEqual(solution.Kata.disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?");
    });
    it("should pass some random tests", function () {
        for (let i = 0; i < 100; ++i) {
            let str = Array.apply(null, new Array(~~(Math.random() * 300)))
                .map((_) => String.fromCharCode(~~(Math.random() * 256)))
                .join("");
            let actual = solution.Kata.disemvowel(str);
            let expected = str.replace(/[aeiou]/gi, "");
            chai_1.assert.strictEqual(actual, expected);
        }
    });
});
