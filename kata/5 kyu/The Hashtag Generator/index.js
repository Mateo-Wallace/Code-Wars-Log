function generateHashtag(str) {
  const res = str
    .split(" ")
    .filter((exists) => exists)
    .map((item) => item[0].toUpperCase() + item.substring(1))
    .join("");

  return res.length && res.length < 140 ? `#${res}` : false;
}

module.exports = generateHashtag;
