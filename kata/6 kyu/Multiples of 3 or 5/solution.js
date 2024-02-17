// Solution by https://www.codewars.com/users/jhoffner

function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

// expected output: 23
console.log(solution(10));
