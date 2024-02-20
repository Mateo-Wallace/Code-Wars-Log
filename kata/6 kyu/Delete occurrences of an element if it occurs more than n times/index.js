function deleteNth(arr, n) {
  return arr.filter((element, index, array) => {
    const specificElement = array
      .map((val, index) => ({ val, index }))
      .filter((e) => e.val === element);
    for (i = 0; i < specificElement.length; i++) {
      if (index === specificElement[i].index && i + 1 > n) return false;
    }
    return true;
  });
}

module.exports = deleteNth;
