const { getAPI } = require("../Function");
const { hijriMonthsJSON } = require("../Data");
const { BaseHijriError } = require("../Tools");

function calendarQuick(m, y) {
  if (typeof m !== "number") {
    throw new BaseHijriError("[TYPE_ERROR]: Month is must be a number.");
  }
  if (typeof y !== "number") {
    throw new BaseHijriError("[TYPE_ERROR]: Year is must be a number.");
  }
  if (!m) {
    throw new BaseHijriError("[NOT_FOUND]: Month is require.");
  } else {
    if (m > 12) {
      throw new BaseHijriError("[INVALID_NUMBER]: Max value of month is 12.");
    } else {
      if (m === 0)
        throw new BaseHijriError("[INVALID_NUMBER]: Min value of month is 1.");
    }
  }
  if (!y) {
    throw new BaseHijriError("[NOT_FOUND]: Year is require.");
  }
}
function convertQuick(d, m, y, hijri) {
  if (typeof d !== "number") {
    throw new BaseHijriError("[TYPE_ERROR]: Day is must be a number.");
  } else if (typeof m !== "number") {
    throw new BaseHijriError("[TYPE_ERROR]: Month is must be a number.");
  } else if (typeof y !== "number") {
    throw new BaseHijriError("[TYPE_ERROR]: Year is must be a number.");
  }
  if (!m) {
    throw new BaseHijriError("[NOT_FOUND]: Month is require.");
  } else {
    if (m > 12) {
      throw new BaseHijriError("[INVALID_NUMBER]: Max value of month is 12.");
    } else if (m === 0) {
      throw new BaseHijriError("[INVALID_NUMBER]: Min value of month is 1.");
    }
  }
  if (!d) {
    throw new BaseHijriError("[NOT_FOUND]: Day is require.");
  } else {
    if (hijri) {
      if (d > 30) {
        throw new BaseHijriError("[INVALID_NUMBER]: Max value of day is 30.");
      } else if (d === 0) {
        throw new BaseHijriError("[INVALID_NUMBER]: Min value of day is 1.");
      }
    } else {
      if (d > 31) {
        throw new BaseHijriError("[INVALID_NUMBER]: Max value of day is 31.");
      } else if (d === 0) {
        throw new BaseHijriError("[INVALID_NUMBER]: Min value of day is 1.");
      }
    }
  }
  if (!y) throw new BaseHijriError("[NOT_FOUND]: Year is require.");
}
class BaseHijri {
  //constructor(){ super() }

  /**
   * Get a Hijri/Gregorian calendar from Hijri/Gregorian month and year
   */
  get calendar() {
    return {
      /**
       * Get a Hijri calendar from a Gregorian month and year
       * @param {number} [month_in_gregorian] - ex: 1,2,3
       * @param {number} [year_in_gregorian] -  ex: 2025,1947,1972
       * @returns {Promise<import("../types/").GregorianToHijriCalendar[]>}
       */
      async gregorianToHijri(month_in_gregorian, year_in_gregorian) {
        calendarQuick(month_in_gregorian, year_in_gregorian);
        const api = `https://api.aladhan.com/v1/gToHCalendar/${month_in_gregorian}/${year_in_gregorian}`;
        const res = await getAPI(api);
        const calendar = await res.data;
        return calendar;
      },

      /**
       * Get a Gregorian calendar from Hijri month and year
       * @param {number} month_in_hijri - ex: 1,2,3
       * @param {number} year_in_hijri -  ex: 1444,1446
       * @returns {Promise<import("../types/").GregorianToHijriCalendar[]>}
       */
      async hijriToGregorian(month_in_hijri, year_in_hijri) {
        calendarQuick(month_in_hijri, year_in_hijri);
        const api = `https://api.aladhan.com/v1/hToGCalendar/${month_in_hijri}/${year_in_hijri}`;
        const res = await getAPI(api);
        const calendar = await res.data;
        return calendar;
      },
    };
  }
  /**
   * Convert a Gregorian date / Hijri date
   */
  get convert() {
    return {
      /**
       * Convert a Gregorian date to a Hijri date
       * @param {number} day_in_gregorian - 1>31
       * @param {number} month_in_gregorian - 1>12
       * @param {number} year_in_gregorian - Ex: 2020, 1972
       * @returns {Promise<import("../types/").ConvertGregorianDateToHijriDate>}
       */
      async GregorianToHijri(
        day_in_gregorian,
        month_in_gregorian,
        year_in_gregorian,
      ) {
        convertQuick(
          day_in_gregorian,
          month_in_gregorian,
          year_in_gregorian,
          false,
        );
        const api = `https://api.aladhan.com/v1/gToH/${day_in_gregorian}-${month_in_gregorian}-${year_in_gregorian}`;
        const res = await getAPI(api);
        return await res.data;
      },
      /**
       * Convert a Hijri date to a Gregorian
       * @param {number} day_in_hijri - 1>30
       * @param {number} month_in_hijri - 1>12
       * @param {number} year_in_hijri - Ex: 1444, 1429
       * @returns {Promise<import("../types/").ConvertHijriDateToGregoriaDate>}
       */
      async HijriToGregorian(day_in_hijri, month_in_hijri, year_in_hijri) {
        convertQuick(day_in_hijri, month_in_hijri, year_in_hijri, true);
        const api = `https://api.aladhan.com/v1/hToG/${day_in_hijri}-${month_in_hijri}-${year_in_hijri}`;
        const res = await getAPI(api);
        return await res.data;
      },
    };
  }
  /**
   * Get all or one Islamic months as per Hijri calendar
   */
  get islamicMonths() {
    //const api = "https://api.aladhan.com/v1/islamicMonths";

    return {
      /**
       * Get all islamic months
       * @returns {import("../types/").IslamicMonths}
       */
      all() {
        return hijriMonthsJSON;
      },
      /**
       * Get a specific month by its number.
       * @param {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} number_of_month - 1>12
       * @returns {import("../types/").IslamicMonth}
       */
      get(number_of_month) {
        if (number_of_month > 12) {
          throw new BaseHijriError(
            "[INVALID_NUMBER]: Max value of month is 12.",
          );
        }
        return hijriMonthsJSON[number_of_month];
      },
    };
  }
}
module.exports = BaseHijri;
