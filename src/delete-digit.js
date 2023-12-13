const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let m = n.toString().split("");
  let res = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < m.length; i++) {
    let c = [...m];
    c.splice(i, 1);
    res = Math.max(res, Number(c.join("")));
  }
  return res;
}

module.exports = {
  deleteDigit
};
