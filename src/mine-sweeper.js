const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    res.push([]);
    for (let j = 0; j < matrix[0].length; j++) {
      let i1 = Math.max(0, i - 1);
      let i2 = Math.min(matrix.length - 1, i + 1);
      let j1 = Math.max(0, j - 1);
      let j2 = Math.min(matrix[0].length - 1, j + 1);
      let count = 0;
      for (let x = i1; x <= i2; x++) {
        for (let y = j1; y <= j2; y++) {
          if (x === i && y === j) continue;
          if (matrix[x][y]) {
            count++;
          }
        }
      }
      res[i].push(count);
    }
  }
  return res;
}

module.exports = {
  minesweeper,
};
