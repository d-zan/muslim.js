const { getMethodName, getMethodNumber } = require("../Function");
const { PrayerJSON } = require("../Data");
class BasePrayer {
  /**
   * @param {string} city - ex: Cairo, London
   * @param {string} country - ex: EG, UK - A country name or 2 character alpha ISO 3166 code
   * @param {import("../types/").Method} method - A prayer times calculation method
   */
  constructor(city, country, method) {
    this.methods = method;
    this.city = city;
    this.country = country;
  }
  get latitude() {
    let latitude = 0;
    const number = getMethodNumber(this.methods);
    const name = getMethodName(number);
    latitude = PrayerJSON[name].location.latitude;
    return latitude;
  }
  get longitude() {
    let longitude = 0;
    const number = getMethodNumber(this.methods);
    const name = getMethodName(number);
    longitude = PrayerJSON[name].location.longitude;
    return longitude;
  }
}
module.exports = BasePrayer;
