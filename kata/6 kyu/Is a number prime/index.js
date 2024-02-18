// square root explanation
// https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-number-to-determine-if-the-number-is/5811176#5811176

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2, len = Math.sqrt(num); i <= len; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

module.exports = isPrime;
