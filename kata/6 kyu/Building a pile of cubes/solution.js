// https://www.codewars.com/users/acraileanu

// this is based on the formula that the sum of the first n cubes equals (n * (n + 1) / 2) ^ 2
// also, the sum of the first n cubes is always a square

function findNb(m) {
  m = Math.sqrt(m) * 2;
  if (m != parseInt(m)) {
    return -1;
  }
  var result = parseInt(Math.sqrt(m));
  return result * (result + 1) == m ? result : -1;
}

module.exports = findNb;
