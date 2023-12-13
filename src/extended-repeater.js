const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes !== undefined ? Number.parseInt(options.repeatTimes) : 1;
  let separator = options.separator !== undefined ? String(options.separator) : '+';
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? Number.parseInt(options.additionRepeatTimes) : 1;
  let additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';

  let additionStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  let res = new Array(repeatTimes).fill(str + additionStr).join(separator);
  return res;
}

module.exports = {
  repeater
};
