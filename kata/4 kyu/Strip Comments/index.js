function solution(text, markers) {
  const arr = text.split(/(\n)/g);
  const map = arr.map((item) => {
    if (item == "\n") return item;
    for (let i = 0; i < markers.length; i++) {
      rg = new RegExp(`\\s?\\${markers[i]}(.*)`, "g");
      item = item.replace(rg, ``);
    }
    return item.trimEnd();
  });
  return map.join("");
}

module.exports = solution;
