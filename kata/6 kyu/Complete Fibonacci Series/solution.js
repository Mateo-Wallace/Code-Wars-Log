// https://www.codewars.com/users/TanyaG

function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return n > 0 ? arr : [];
}

module.exports = fibonacci;
