function digPow(n, p) {
  let arr = (num) => Array.from(String(num), Number);

  // sum = n[1] ** p + n[2] ** p + 1;
  const sum = arr(n).reduce(
    (accumulator, currentValue, i) => accumulator + currentValue ** (p + i),
    0
  );

  // sum == n * k;
  let k = sum / n;

  return k % 1 == 0 ? k : -1;
}

module.exports = digPow;
