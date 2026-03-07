const MethodName = require('../Tools/MethodName');
const MethodNumber = require('../Tools/MethodNumber');
class MethodError extends Error {
  get name() {
    return "MethodError";
  }
}
/**
 * @private
 * @param {import("../types/prayer").MethodNumberType} method 
 * @returns {import("../types/prayer").MethodName} 
 */
function getMethodName(method=0) {
    if (!MethodName[method]) throw new MethodError('[INVALID_METHOD]: Select a valid method');
    return  MethodName[method];
}
module.exports = getMethodName;