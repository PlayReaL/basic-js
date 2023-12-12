const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  let input = [...arr];
  let nextValueDeleted = false;
  while(true) {
    if(input.length === 0) {
      break;
    }
    let el = input.shift();
    switch (el) {
      case '--discard-prev':
        if(!nextValueDeleted) {
          res.pop();
        }
        nextValueDeleted = false;
        break;
      case '--double-next':
        if(input.length > 0) {
          input.unshift(input[0]);
        }
        nextValueDeleted = false;
        break;
      case '--discard-next':
        nextValueDeleted = true;
        input.shift();
        break;
      case '--double-prev':
        if(res.length > 0 && !nextValueDeleted) {
          res.push(res[res.length - 1]);
        }
        nextValueDeleted = false;
        break;
      default:
        res.push(el);
        nextValueDeleted = false;
    }
  };
  return res;
}

module.exports = {
  transform
};
