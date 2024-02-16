// https://www.codewars.com/users/czyzykowski

decodeMorse = function (morseCode) {
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(" ").map(decodeMorseLetter).join("");
  }
  return morseCode.trim().split("   ").map(decodeMorseWord).join(" ");
};

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"