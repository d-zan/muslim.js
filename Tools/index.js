//Hub
const {
  QuranTextError,
  BaseQuranTextError,
  AlQuranCloudAPIError,
  HijriError,
  BaseHijriError,
  AsmaAllahHusnaError,
  PrayerError,
  BasePrayerError,
  AladhanAPIError,
  MethodError
} = require("./errors");
const identifierByName = require("./identifierByName");
const MethodName = require("./MethodName");
const MethodNumber = require("./MethodNumber");
const StatusCode = require("./StatusCode");
const SurahNumberByName = require("./SurahNumberByName");

module.exports = {
  // Data & Maps
  identifierByName,
  MethodName,
  MethodNumber,
  StatusCode,
  SurahNumberByName,
  
  // Errors
  AlQuranCloudAPIError,
  AsmaAllahHusnaError,
  HijriError,
  BaseHijriError,
  QuranTextError,
  BaseQuranTextError,
  PrayerError,
  BasePrayerError,
  AladhanAPIError,
  MethodError
};
