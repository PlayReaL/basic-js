const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    return this.transformString(message, key);
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    return this.transformString(message, key, false);
  }

  transformString(str, key, direction = true) {
    let res = "";
    let k = 0;
    for (let i = 0; i < str.length; i++) {
      let charCode1 = str[i].toUpperCase().charCodeAt(0);
      if (charCode1 < 65 || charCode1 > 90) {
        res += str[i];
        continue;
      }
      let charCode2 = key[k].toUpperCase().charCodeAt(0);
      res += this.transformChar(charCode1, charCode2, direction);
      k = (k + 1) % key.length;
    }
    if(!this.isDirect) {
      res = res.split("").reverse().join("");
    }
    return res;
  }

  transformChar(charCode1, charCode2, direction = true) {
    let shift = charCode2 - 65;
    if (direction) {
      return String.fromCharCode(((charCode1 - 65 + shift) % 26) + 65);
    } else {
      return String.fromCharCode(((charCode1 - 65 - shift + 26) % 26) + 65);
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
