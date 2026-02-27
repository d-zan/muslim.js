//const api = 'https://api.aladhan.com/v1/gToHCalendar/1/2025'
//const axios = require("axios");
const BaseHijri = require("../Base/baseHijri.js");
const getAPI = require("../Function/getApi.js");
class HijriError extends Error {
  get name() {
    return "HijriError";
  }
}
/**
 *
 */
class Hijri extends BaseHijri {
  constructor() {
    super();
  }

  /**
   * Get the next upcoming holiday in the Hijri calendar
   * @returns {Promise<import("../types/hijri.js").NextHijriHoliday>}
   */
  async getNextHijriHoliday() {
    const api = "https://api.aladhan.com/v1/nextHijriHoliday";
    const res = await getAPI(api);
    return await res.data;
  }
  /**
   * Returns current Islamic year
   * @returns {Promise<number>}
   */
  async getYear() {
    const api = "https://api.aladhan.com/v1/currentIslamicYear";
    const res = await getAPI(api);
    return await res.data;
  }
  /**
   * Returns current Islamic month
   * @returns {Promise<number>}
   */
  async getMonth() {
    const api = "https://api.aladhan.com/v1/currentIslamicMonth";
    const res = await getAPI(api);
    return await res.data;
  }
  /**
   * Returns Hijri year from Gregorian year.
   * @param {number} year
   * @returns {Promise<number>}
   */
  async getHijriYearFromGregorianYear(year) {
    if (!year) {
      throw new HijriError("[NOT_FOUND]: Year is reqiure");
    }
    const api = `https://api.aladhan.com/v1/islamicYearFromGregorianForRamadan/${year}`;
    const res = await getAPI(api);
    return await res.data;
  }
  /**
   * Returns a holiday for a specific day of a month as per Hijri calendar
   * @param {number} day ex: 12, 19, 25
   * @param {number} month ex: 1, 2, 6
   * @returns {Promise<string[]>}
   */
  async getHijriHolidays(day, month) {
    if (!month) {
      throw new HijriError("[NOT_FOUND]: Month is require.");
    } else {
      if (month > 12) {
        throw new HijriError("[INVALID_NUMBER]: Max value of month is 12.");
      } else if (month === 0) {
        throw new HijriError("[INVALID_NUMBER]: Min value of month is 1.");
      }
    }
    if (!day) {
      throw new HijriError("[NOT_FOUND]: Day is require.");
    } else {
      if (day > 30) {
        throw new HijriError("[INVALID_NUMBER]: Max value of day is 30.");
      } else if (day === 0) {
        throw new HijriError("[INVALID_NUMBER]: Min value of day is 1.");
      }
    }
    const api = `https://api.aladhan.com/v1/hijriHolidays/${day}/${month}`;
    const res = await getAPI(api);
    return await res.data;
  }
  /**
   * Returns a list of special days as per Hijri calendar
   * @returns {Promise<import("../types/hijri.js").SpecialDays[]>}
   */
  async getSpecialDays() {
    const api = "https://api.aladhan.com/v1/specialDays";
    const res = await getAPI(api);
    return await res.data;
  }
  /**
   * Returns a list of holidays as per the Hijri year
   * @param {number} year ex: 1444,1446,1445
   * @returns {Promise<import("../types/hijri.js").HijriHolidaysByYear[]>}
   */
  async getHijriHolidaysByYear(year) {
    if (!year) {
      throw new HijriError("[NOT_FOUND]: Year is reqiure");
    }
    const api = `https://api.aladhan.com/v1/islamicHolidaysByHijriYear/${year}`;
    const res = await getAPI(api);
    return await res.data;
  }
}
module.exports = Hijri;