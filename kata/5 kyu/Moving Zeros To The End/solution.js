// https://www.codewars.com/users/saeedmahani

var moveZeros = function (arr) {
  return [
    ...arr.filter((n) => n !== 0), 
    ...arr.filter((n) => n === 0)
  ];
};

module.exports = moveZeros;
