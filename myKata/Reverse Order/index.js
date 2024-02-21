const reverseOrder = (low, high) => {
  let reverseArray = [];

  for (let i = high; i > low - 1; i--) {
    reverseArray.push(i);
  }

  return reverseArray;
};

module.exports = reverseOrder;
