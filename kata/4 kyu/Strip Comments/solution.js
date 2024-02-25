// https://www.codewars.com/users/Rabba

function solution(input, markers) {
  return input
    .split("\n")
    .map((str) => markers.reduce((s, m) => s.split(m)[0], str).trimEnd())
    .join("\n");
}

module.exports = solution;
