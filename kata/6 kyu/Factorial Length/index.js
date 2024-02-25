function count(n) {
  let len = 0;
  if (n <= 1) return len + n;

  for (let i = 2; i <= n; i++) len += Math.log10(i);

  return Math.floor(len) + 1;
}

module.exports = count;
