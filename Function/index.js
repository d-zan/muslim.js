const getAPI = require("./API/getAPI.js");
const quranAPI = require("./API/quranApi");
const quranAPIData = require("./API/quranAPIData");
//const search = require("./CLASS/search");
const { convertOneToAMPM, converttoAMPM } = require("./converttoAMPM");
const fixNames = require("./fixNames.js");
const getMethodName = require("./getMethodName");
const getMethodNumber = require("./getMethodNumber");
module.exports = {
    getMethodName,
    getMethodNumber,
    getAPI,
    quranAPI,
    quranAPIData,
    convertOneToAMPM,
    converttoAMPM,
    fixNames
}