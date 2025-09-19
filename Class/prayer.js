const axios = require("axios");
const getMethodNumber = require("../Function/getMethodNumber");
const converttoAMPM = require("../Function/converttoAMPM");
const StatusCode = require("../JS/StatusCode");
const MethodNumber = require("../JS/MethodNumber");
const MethodName = require("../JS/MethodName");
const getMethodName = require("../Function/getMethodName");
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
class Prayer {
  /**
   * @param {string} city - ex: Cairo, London
   * @param {string} country - ex: EG, UK - A country name or 2 character alpha ISO 3166 code
   * @param {import("../types/index").Method} method - A prayer times calculation method
   */
  constructor(city, country, method) {
    if (!city) throw new PrayerError("City option is require");
    if (!country) throw new PrayerError("Country option is require");
    if (country.length !== 2) throw new PrayerError("Country option length must be 2");
    if (!method) throw new PrayerError("Method option is require");
    let name = ''
    let method2;
    let latitude;
    let longitude;
    
   axios.get("https://api.aladhan.com/v1/methods").then(axi=>{
       name = getMethodName(this.method);
       method2 =  axi.data.data[name];
       latitude =  method2.location.latitude;
       longitude =  method2.location.longitude;
    });
    this.method = getMethodNumber[method];
    this.city = city;
    this.country = country;
    this.latitude = latitude;
    this.longitude = longitude;
  }
  /**
  Get all pray time
   * @param {boolean} [ToAM_PM] - Convert time to AM & PM System
   * @returns {Promise<import("../types/index").AllPrayTime>}
   */
  async getAllPrayTime(ToAM_PM) {
    const api = `https://api.aladhan.com/v1/timingsByCity?city=${this.city}&country=${this.country}&method=${this.method}`;
    const ax = await axios.get(api);
    const time = ax.data.data.timings;
    const code = ax.data;
    if (ToAM_PM) {
      if (code.code === 200) {
        return converttoAMPM(time);
      } else {
        throw new AladhanAPIError(
          `[${code.code}]: ${StatusCode[`${code.code}`]}` + code.message
        );
      }
    } else {
      if (code.code === 200) {
        return time;
      }
    }
  }
  /**
   * Returns next prayer time for a specific date
   * @returns {Promise<import('../types/index.ts').NextPray>}
   */
  async getNextPrayTime() {
    /*
    const axi = await axios.get("https://api.aladhan.com/v1/methods");
    const name = getMethodName(this.method);
    const method = await axi.data.data[name];
    const latitude = await method.location.latitude;
    const longitude = await method.location.longitude;
    const api = `https://api.aladhan.com/v1/nextPrayer/27-03-2025?latitude=${latitude}&longitude=${longitude}`;
    const ax = await axios.get(api);
    const pray = ax.data.data.timings;
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
    return opj;*/
    /** 
    const api = `https://api.aladhan.com/v1/timingsByCity/27-03-2025?city=${this.city}&country=${this.country}&method=${this.method}`;
    const ax = await axios.get(api);
    const timee = ax.data.data.timings;
const prayer = {
'Fajr': timee.Fajr,
'Sunrise': timee.Sunrise,
'Dhuhr': timee.Dhuhr,
'Asr': timee.Asr,
'Maghrib': timee.Maghrib,
'Isha': timee.Isha,
'Imsak': timee.Imsak,
'Midnight': timee.Midnight,
'Firstthird': timee.Firstthird,
'Lastthird': timee.Lastthird,
}
    const now = new Date();
    const hoursN = now.getHours();
    const minuteN = now.getMinutes();
    for ( const [pray,time] of Object.entries(prayer)) {
let [hours,minutes] = time.split(':').map(Number);
if (hours < hoursN || (hours === hoursN && minutes > minuteN)) {
  return {name:pray,time:time}
}
    }
    */
    const now = new Date();
    const h = `${now.getDay()}-${now.getMonth() + 1}-${now.getFullYear()}`;

    const api = `https://api.aladhan.com/v1/nextPrayerByAddress/${h}?address=${this.city}%2C+${this.country}&method=${this.method}`;

    const ax = await axios.get(api);
    const pray = ax.data.data.timings;
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
