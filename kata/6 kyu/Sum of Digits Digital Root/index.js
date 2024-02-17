function digitalRoot(n) {
  let arr = (num) => Array.from(String(num), Number);
  while (arr(n).length != 1) {
    const sum = arr(n).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    n = sum;
  }

  return n;
}

module.exports = digitalRoot