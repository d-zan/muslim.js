const MethodNumber = require('../JS/MethodNumber');
class MethodError extends Error {
  get name() {
    return "MethodError";
  }
}
/**
* @private
* @param {import("../types/prayer").Method} method
*/
function getMethodNumber(method) {
    if (!MethodNumber[method]) throw new MethodError('[INVALID_METHOD]: Select a valid method');
    return  MethodNumber[method] 
}
module.exports = getMethodNumber;