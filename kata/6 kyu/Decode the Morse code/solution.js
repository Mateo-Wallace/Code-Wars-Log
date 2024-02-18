// https://www.codewars.com/users/czyzykowski
const MORSE_CODE = require("./helper");

decodeMorse = function (morseCode) {
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(" ").map(decodeMorseLetter).join("");
  }
  return morseCode.trim().split("   ").map(decodeMorseWord).join(" ");
};

module.exports = decodeMorse;
