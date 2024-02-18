function findNb(m) {
  let sum = 0;
  for (let i = 1, len = m; i < len; i++) {
    sum += i ** 3;
    if (sum === m) return i;
    if (sum > m) return -1;
  }

  return -1;
}

module.exports = findNb;
