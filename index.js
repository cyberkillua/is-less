const isNumber = require("is-number");

function isLess(numA, numB) {
  if (!isNumber(numA)) {
    throw new TypeError("expected a number");
  }
  if (!isNumber(numB)) {
    throw new TypeError("expected a number");
  }

  if (numA < numB) {
    return numA;
  } else if (numB < numA) {
    return numB;
  } else {
    return numA;
  }
}

module.exports.isLess = isLess;
