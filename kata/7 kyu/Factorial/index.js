function factorial(n) {
  if (0 > n || n > 12)
    throw new RangeError("The argument must be between 0 and 12.");
  let result = 1;

  for (var i = n; i > 1; i--) {
    result = result * i;
  }

  return result;
}

module.exports = factorial;
