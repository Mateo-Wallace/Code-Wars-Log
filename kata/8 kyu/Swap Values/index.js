function swapValues(arguments) {
  var args = arguments;
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

module.exports = swapValues
