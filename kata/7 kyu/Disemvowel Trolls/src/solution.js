"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static disemvowel(str) {
        return str.replace(/[aeiou]/gi, "");
    }
}
exports.Kata = Kata;
