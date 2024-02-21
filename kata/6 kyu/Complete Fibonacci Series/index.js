function fibonacci(n) {
  let fibonacciArray = [];

  for (let i = 0; i < n; i++) {
    i < 2
      ? (fibonacciArray[i] = i)
      : (fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2]);
  }

  return fibonacciArray;
}

module.exports = fibonacci;
