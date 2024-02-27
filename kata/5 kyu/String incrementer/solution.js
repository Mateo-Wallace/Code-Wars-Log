// https://www.codewars.com/users/Izaak%20Rogan

let incrementString = (str) =>
  str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));

module.exports = incrementString;
