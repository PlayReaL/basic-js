const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = "";
  let prevChar = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === prevChar) {
      count++;
    } else {
      res += count !== 1 ? count : "";
      res += prevChar;
      prevChar = str[i];
      count = 1;
    }
  }
  res += count !== 1 ? count : "";
  res += prevChar;
  return res;
}

module.exports = {
  encodeLine,
};
