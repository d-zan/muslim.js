const getMethodNumber = require("../Function/getMethodNumber");
const converttoAMPM = require("../Function/converttoAMPM");
const StatusCode = require("../JS/StatusCode");
const MethodNumber = require("../JS/MethodNumber");
const MethodName = require("../JS/MethodName");
const getMethodName = require("../Function/getMethodName");
const BasePrayer = require("../Base/basePrayer.js");
class PrayerError extends Error {
  get name() {
    return "PrayerError";
  }
}
class AladhanAPIError extends Error {
  get name() {
    return "AladhanAPIError";
  }
}
const api =
  "https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=EG&method=5";
/**
 * One class to open pray door
 */
class Prayer extends BasePrayer {
  /**
   * @param {string} city - ex: Cairo, London
   * @param {string} country - ex: EG, UK - A country name or 2 character alpha ISO 3166 code
   * @param {import("../types/index").Method} method - A prayer times calculation method
   */
  constructor(city, country, method) {
    if (!city) throw new PrayerError("City option is require");
    if (!country) throw new PrayerError("Country option is require");
    if (country.length !== 2)
      throw new PrayerError("Country option length must be 2");
    if (!method) throw new PrayerError("Method option is require");
    super(city, country, method);

    this.method = getMethodNumber(method);
  }
  /**
  Get all pray time
   * @param {boolean} [ToAM_PM] - Convert time to AM & PM System
   * @returns {Promise<import("../types/index").AllPrayTime>}
   */
  async getAllPrayTime(ToAM_PM) {
    const api = `https://api.aladhan.com/v1/timingsByCity?city=${this.city}&country=${this.country}&method=${this.method}`;
    const res = await fetch(api);
    const json = await res.json();
    const time = json.data.timings;
    if (ToAM_PM) {
      if (res.ok) {
        return converttoAMPM(time);
      } else {
        throw new AladhanAPIError(
          `[${json.code}]: ${StatusCode[`${json.code}`]}` + json.message
        );
      }
    } else {
      if (res.ok) {
        return time;
      } else {
        throw new AladhanAPIError(
          `[${json.code}]: ${StatusCode[`${json.code}`]}` + json.message
        );
      }
    }
  }
  /**
   * Returns next prayer time for a specific date
   * @returns {Promise<import('../types/index.ts').NextPray>}
   */
  async getNextPrayTime() {
    const now = new Date();
    const h = `${now.getDay()}-${now.getMonth() + 1}-${now.getFullYear()}`;

    const api = `https://api.aladhan.com/v1/nextPrayerByAddress/${h}?address=${this.city}%2C+${this.country}&method=${this.method}`;

    const ax = await fetch(api);
    const pray2 = await ax.json();
    const pray = pray2.data.timings;
    let opj = {};

    if (pray.Fajr) {
      opj["time"] = pray.Fajr;
      opj["pray"] = { en: "Fajr", ar: "الفجر" };
    }
    if (pray.Sunrise) {
      opj["time"] = pray.Sunrise;
      opj["pray"] = { en: "Sunrise", ar: "الشروق" };
    }
    if (pray.Dhuhr) {
      opj["time"] = pray.Dhuhr;
      opj["pray"] = { en: "Dhuhr", ar: "الظهر" };
    }
    if (pray.Asr) {
      opj["time"] = pray.Asr;
      opj["pray"] = { en: "Asr", ar: "العصر" };
    }
    if (pray.Maghrib) {
      opj["time"] = pray.Maghrib;
      opj["pray"] = { en: "Maghrib", ar: "المغرب" };
    }
    if (pray.Isha) {
      opj["time"] = pray.Isha;
      opj["pray"] = { en: "Isha", ar: "العشاء" };
    }
    if (pray.Imsak) {
      opj["time"] = pray.Imsak;
      opj["pray"] = { en: "Imsak", ar: "الإمساك" };
    }
    if (pray.Midnight) {
      opj["time"] = pray.Midnight;
      opj["pray"] = { en: "Midnight", ar: "منتصف الليل" };
    }
    //
    if (pray.Firstthird) {
      opj["time"] = pray.Firstthird;
      opj["pray"] = { en: "Firstthird", ar: "التهجد" };
    }
    if (pray.Lastthird) {
      opj["time"] = pray.Lastthird;
      opj["pray"] = { en: "Lastthird", ar: "التهجد" };
    }
    return opj;
  }
}
module.exports = Prayer;
