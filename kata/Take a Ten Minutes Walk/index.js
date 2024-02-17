function isValidWalk(walk) {
  // n + s -
  let ns = 0;
  // e + s -
  let ew = 0;

  for (i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        ns++;
        break;
      case "s":
        ns--;
        break;
      case "e":
        ew++;
        break;
      case "w":
        ew--;
        break;
      default:
        console.log("Invalid input");
    }
  }

  return ns === 0 && ew === 0 && walk.length === 10;
}

console.log(isValidWalk(["n", "s", "w", "e", "n", "s", "w", "e", "w", "e"]));
