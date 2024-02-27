function incrementString(str) {
  const rg = /\d+$/;
  if (!str.match(rg)) return str + 1;
  return str.replace(rg, (match) => {
    let num = `${Number(match) + 1}`;
    if (num.length >= match.length) return num;
    while (num.length != match.length) num = `0${num}`;
    return num;
  });
}

module.exports = incrementString;
