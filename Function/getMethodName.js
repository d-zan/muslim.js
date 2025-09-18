const MethodName = require('../JS/MethodName');
const MethodNumber = require('../JS/MethodNumber');
class MethodError extends Error {
  get name() {
    return "MethodError";
  }
}

function getMethodName(method=0) {
    if (!MethodName[method]) throw new MethodError('[INVALID_METHOD]: Select a valid method');
    return  MethodName[method];
}
module.exports = getMethodName;