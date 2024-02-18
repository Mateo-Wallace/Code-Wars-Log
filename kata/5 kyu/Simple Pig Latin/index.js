function pigIt(str) {
  let arr = str.split(" ");

  const pigArr = arr.map((word) => {
    const isPunc = !!word.match(/^[.,:!?]/);
    return isPunc ? word : word.slice(1) + word[0] + "ay";
  });

  return pigArr.join(" ");
}

module.exports = pigIt;
