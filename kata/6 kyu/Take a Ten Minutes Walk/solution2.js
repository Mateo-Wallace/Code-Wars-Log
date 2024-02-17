// https://www.codewars.com/users/pox

function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function (a) {
      return a == val;
    }).length;
  }
  return (
    walk.length == 10 && count("n") == count("s") && count("w") == count("e")
  );
}

// expected output: true
console.log(isValidWalk(["n", "s", "w", "e", "n", "s", "w", "e", "w", "e"]));
