const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let map = new Map();
  for (let d = 0; d < domains.length; d++) {
    let arr = [];
    arr = domains[d].split(".").reverse();
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      str = str + "." + arr[i];
      map.set(str, map.get(str) + 1 || 1);
    }
  }
  return Object.fromEntries(map);
}

module.exports = {
  getDNSStats,
};
