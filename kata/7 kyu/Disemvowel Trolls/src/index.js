"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static disemvowel(str) {
        const separators = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        separators.forEach((separator) => {
            const rg = new RegExp(`\\${separator}`, "g");
            str = str.replace(rg, "");
        });
        return str;
    }
}
exports.Kata = Kata;
