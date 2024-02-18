// https://www.codewars.com/users/evilscott
// regex explanation https://extendsclass.com/regex-tester.html

function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}

module.exports = pigIt;
