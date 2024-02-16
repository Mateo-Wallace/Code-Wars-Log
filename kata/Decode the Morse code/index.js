decodeMorse = function (morseCode) {
  const arr = morseCode.trim().split(" ");
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "" && arr[i + 1] === "") result += " ";
    else if (arr[i] === "" && arr[i + 1] !== "") result;
    else result += MORSE_CODE[arr[i]];
  }
  return result;
};

decodeMorse(".... . -.--   .--- ..- -.. .");
//should return "HEY JUDE"
