function solution(number) {
  // define array to hold multiples of 3 and 5
  const multiplesArr = [];
  // run for loop to check each number below the given value
  for (let i = 0; i < number; i++) {
    // check if current number is divisible by 3 or 5
    if (i % 3 === 0 || i % 5 === 0) multiplesArr.push(i);
  }
  // add all numbers within the multiplesArr
  const sum = multiplesArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
}

module.exports = solution;
