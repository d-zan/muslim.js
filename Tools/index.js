//Hub
const { QuranTextError, AlQuranCloudAPIError,HijriError } = require('./errors');
const identifierByName = require('./identifierByName');
const MethodName = require('./MethodName');
const MethodNumber = require('./MethodNumber');
const StatusCode = require('./StatusCode');
const SurahNumberByName = require('./SurahNumberByName');



module.exports = {
    SurahNumberByName,
    StatusCode,
    MethodNumber,
    MethodName,
    identifierByName,
    QuranTextError,
    AlQuranCloudAPIError,
}