//const api = 'https://api.aladhan.com/v1/gToHCalendar/1/2025'
const axios = require("axios");
class AladhanAPIError extends Error {
  get name() {
    return "AladhanAPIError";
  }
}
class HijriError extends Error {
  get name() {
    return "HijriError";
  }
}
/**
* An Islamic Calendar API that supports various calculation methods to convert Gregorian Dates to Hijri Dates.
*/
class Hijri {
  /**
   * Get a Hijri calendar for a Gregorian month
   * @param {number} month - ex: 1,2,3
   * @param {number} year -  ex: 2025,1947,1972
   * @returns {Promise<import("../types/index").GregorianToHijriCalendar>}
   */
  async getGToHCalendar(month, year) {
    if (!month) throw new HijriError("[NOT_FOUND]: Month is require.");
    if (month > 12)
      throw new HijriError("[INVALID_NUMBER]: Max value of month is 12.");
    if (month === 0)
      throw new HijriError("[INVALID_NUMBER]: Min value of month is 1.");
    if (!year) throw new HijriError("[NOT_FOUND]: Year is require.");
    const data = await axios.get(
      `https://api.aladhan.com/v1/gToHCalendar/${month}/${year}`
    );
    const calendar = data.data;
    return calendar;
  }
  /**
   * Get a Gregorian a calendar for a Hijri month
   * @param {number} month - ex: 1,2,3
   * @param {number} year -  ex: 1444,1446,
   * @returns {Promise<import("../types/index").GregorianToHijriCalendar>}
   */
  async getHToGCalendar(month, year) {
    if (!month) throw new HijriError("[NOT_FOUND]: Month is require.");
    if (month > 12)  throw new HijriError("[INVALID_NUMBER]: Max value of month is 12.");
    if (month === 0) throw new HijriError("[INVALID_NUMBER]: Min value of month is 1.");
    if (!year) throw new HijriError("[NOT_FOUND]: Year is require.");
    const data = await axios.get(
      `https://api.aladhan.com/v1/hToGCalendar/${month}/${year}`
    );
    const calendar = data.data;
    return calendar;
  }
  /**
   * Convert a Gregorian date / Hijri date
   * @param {number} year
   * @param {number} month
   * @param {number} day
   */
  convert(day, month, year) {
    const api = `https://api.aladhan.com/v1/gToH/${day}-${month}-${year}`;
    return {
      /**
       * Convert a Gregorian date to a Hijri date
       * @returns {Promise<import("../types/index").ConvertGregorianDateToHijriDate>}
       */
      async GregorianDateToHijriDate() {
        const data = await axios.get(api);
        if (data.data.code === 404) {
          throw new AladhanAPIError("[NOT_FOUND]: Invalid date or unable to convert it.");
        } else {
          return data.data;
        }
      },
      /**
       * Convert a Hijri date to a Gregorian date
       * @returns {Promise<import("../types/index").ConvertnHijriDateToGregoriaDate>}
       */
      async HijriDateToGregorianDate() {
        const data = await axios.get(api);
        if (data.data.code === 404) {
          throw new AladhanAPIError("[NOT_FOUND]: Invalid date or unable to convert it.");
        } else {
          return data.data;
        }
      },
    };
  }
  /**
   * Get the next upcoming holiday in the Hijri calendar
   * @returns {Promise<import("../types/index").NextHijriHoliday>}
   */
  async getNextHijriHoliday() {
    const api = "https://api.aladhan.com/v1/nextHijriHoliday";
    const data = await axios.get(api);
    try {
      return data.data;
    } catch (error) {
      if (data.data.code === 400) {
        throw new AladhanAPIError(
          "[BAD_REQUEST]: Unable to compute next holiday."
        );
      }
    }
  }
  /**
   * Returns current Islamic year
   * @returns {Promise<number>}
   */
  async getYear() {
    const api = "https://api.aladhan.com/v1/currentIslamicYear";
    const data = await axios.get(api);
    return data.data.data;
  }
  /**
   * Returns current Islamic month
   * @returns {Promise<number>}
   */
  async getMonth() {
    const api = "https://api.aladhan.com/v1/currentIslamicMonth";
    const data = await axios.get(api);
    return data.data.data;
  }
  /**
   * Returns Islamic year from Gregorian year.
   * @param {number} year
   * @returns {Promise<number>}
   */
  async getHYearFromGYear(year) {
    const api = `https://api.aladhan.com/v1/islamicYearFromGregorianForRamadan/${year}`;
    const data = await axios.get(api);
    try {
      return data.data.data;
    } catch (error) {
      if (error.code === 400) {
        throw AladhanAPIError("[BAD_REQUEST]: Please specify a valid year");
      }
    }
  }
  /**
   * Returns a holiday for a specific day of a month as per Hijri calendar
   * @param {number} day ex: 12,13,4
   * @param {number} month ex: 1,2,6
   * @returns {Promise<string[]>}
   */
  async getHijriHolidays(day, month) {
    const api = `https://api.aladhan.com/v1/hijriHolidays/${day}/${month}`;
    const data = await axios.get(api);
    try {
      return data.data.data;
    } catch (error) {
      if (error.code === 400) {
        throw AladhanAPIError(
          "[BAD_REQUEST]: Please specify a valid day and month"
        );
      }
      if (error.code === 404) {
        throw AladhanAPIError("[NOT_FOUND]: No holidays found.");
      }
    }
  }
  /**
   * Returns a list of special days as per Hijri calendar
   * @returns {Promise<import("../types/index").SpecialDays>}
   */
  async getSpecialDays() {
    const api = "https://api.aladhan.com/v1/specialDays";
    const data = await axios.get(api);
    return data.data;
  }
  /**
   * Returns a list of Islamic months as per Hijri calendar
   * @returns {Promise<import("../types/index.ts").IslamicMonths>}
   */
  async getIslamicMonths() {
    const api = "https://api.aladhan.com/v1/islamicMonths";
    const data = await axios.get(api);
    return data.data;
  }
  /**
   * Returns a list of holidays as per the Hijri year
   * @param {number} year ex: 1444,1446,1445
   * @returns {Promise<import("../types/index").HijriHolidaysByYear>}
   */
  async getHijriHolidaysByYear(year) {
    const api = `https://api.aladhan.com/v1/islamicHolidaysByHijriYear/${year}`;
    const data = await axios.get(api);
    try {
      return data.data;
    } catch (error) {
      if (error.code === 404) {
        throw AladhanAPIError("[NOT_FOUND]: No holidays found.");
      }
    }
  }
}
module.exports = Hijri;
