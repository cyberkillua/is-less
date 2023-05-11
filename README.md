# What is this

This is a simple function that takes any number of arguments and returns the smallest of them. The function also allows for an optional argument to specify how many of the smallest numbers to run the operation on and in what direction.

# Installation

`npm i is-less --save`

# Usage

```
const { isLess } = require("path/to/isLess.js");

// Returns the smallest number of the two first arguments
const result = isLess(1, 2, 3)();

// Returns the smallest number of the three first arguments
const result = isLess(1, 2, 3)(3);

// Returns the smallest number of the arguments from behind
const result = isLess(1, 2, 3)(-2);

```

# Tests

The test folder contains unit tests for the isLess function.

To run the tests, use the command `npm test`
