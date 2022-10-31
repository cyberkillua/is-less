const isNumber = require("is-number");

function isLess(numA, numB) {
  if (!isNumber(numA)) {
    throw new TypeError("expected a number");
  }
  if (!isNumber(numB)) {
    throw new TypeError("expected a number");
  }

  if (numA === numB) {
    return numA;
  }

  if (numA < numB) {
    return numA;
  }
  if (numB < numA) {
    return numB;
  }
}

module.export.isLess = isLess;
