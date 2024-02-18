// https://www.codewars.com/users/560041e0b26327aae3000084

function score(dice) {
  var sum = 0,
    count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  var scoring = {
    1: [0, 100, 200, 1000, 1100, 1200],
    2: [0, 0, 0, 200, 200, 200],
    3: [0, 0, 0, 300, 300, 300],
    4: [0, 0, 0, 400, 400, 400],
    5: [0, 50, 100, 500, 600, 700],
    6: [0, 0, 0, 600, 600, 600],
  };
  for (n of dice) count[n] += 1;
  for (n in count) sum += scoring[n][count[n]];
  return sum;
}

module.exports = score;
