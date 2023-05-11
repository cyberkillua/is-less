function isLess(...rest) {
  return (count = 2) => {
    count = Math.floor(count);
    const values =
      count > 0 ? rest.slice(0, count) : rest.slice(rest.length + count);
    let smallest = Infinity;
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      if (typeof value !== "number" || isNaN(value)) {
        throw new TypeError("Expected a number");
      }
      if (value < smallest) {
        smallest = value;
      }
    }
    return smallest;
  };
}

module.exports.isLess = isLess;
