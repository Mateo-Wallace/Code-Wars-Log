function score(dice) {
  let score = 0;
  let avail = dice;

  const rollFilter = (n) => avail.filter((item) => item === n);
  const removeDie = (n) => {
    for (let index = 0; index < 3; index++) {
      if (!rollFilter(n).length) return;
      const iRemove = avail.indexOf(n);
      avail.splice(iRemove, 1);
    }
  };

  while (avail.length) {
    const die = avail[0];

    if (rollFilter(die).length >= 3) {
      removeDie(die);
      score += die === 1 ? 1000 : die * 100;
    } else if (die === 1 || die === 5) {
      const n = rollFilter(die).length;
      removeDie(die);
      score += die === 5 ? 50 * n : 100 * n;
    } else {
      removeDie(die);
    }
  }

  return score;
}

module.exports = score;
