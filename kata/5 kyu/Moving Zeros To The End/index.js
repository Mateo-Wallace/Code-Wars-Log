function moveZeros(arr) {
  const num = arr.filter((item) => item === 0);
  const noZero = arr.filter((item) => item !== 0);
  num.forEach(() => noZero.push(0));

  return noZero;
}

module.exports = moveZeros

// function moveZeros(arr) {
//   const zerosArr = arr
//     .map((val, i) => ({ val, i }))
//     .filter((obj, i) => {
//       if (obj.val === 0) return i;
//     });

//   zerosArr.forEach((obj, i) => {
//     arr.splice(obj.i - i);
//     arr.push(obj.val);
//   });

//   return console.log(arr);
// }