function solution(str) {
  let arr = Array.from(str);

  for (i = 0; i < arr.length; i++) {
    if (arr[i + 1]) {
      arr[i] += arr[i + 1];
      arr.splice(i + 1, 1);
    } else {
      arr[i] += "_";
    }
  }

  return arr;
}

module.exports = solution;
