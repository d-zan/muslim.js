const MethodNumber = require('../JS/MethodNumber');
class MethodError extends Error {
  get name() {
    return "MethodError";
  }
}

function getMethodNumber(method='') {
    if (!MethodNumber[method]) throw new MethodError('[INVALID_METHOD]: Select a valid method');
    return  MethodNumber[method] 
}
module.exports = getMethodNumber;