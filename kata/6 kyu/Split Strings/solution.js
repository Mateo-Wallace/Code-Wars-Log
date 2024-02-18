// https://www.codewars.com/users/myjinxin2015
// regex explanation https://extendsclass.com/regex-tester.html

function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}

module.exports = solution;
