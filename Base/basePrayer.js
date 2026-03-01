const getMethodName = require("../Function/getMethodName");
const getMethodNumber = require("../Function/getMethodNumber");
const prayerM = require("../Data/Prayer.json")
class BasePrayer {
      /**
   * @param {string} city - ex: Cairo, London
   * @param {string} country - ex: EG, UK - A country name or 2 character alpha ISO 3166 code
   * @param {import("../types/prayer").Method} method - A prayer times calculation method
   */
  constructor(city,country,method) {
    this.methods = method;
    this.city = city;
    this.country = country;
  }
  latitude() {
    let latitude = 0;
    const number = getMethodNumber(this.methods);
    const name = getMethodName(number);
    latitude = prayerM[name].location.latitude;
    return latitude;
  }
  async longitude() {
    let longitude = 0;
    const res = await fetch("https://api.aladhan.com/v1/methods");
    const number = getMethodNumber(this.methods);
    const name = getMethodName(number);
    const json = await res.json();
    const data = await json;

    longitude = data.data[name].location.longitude;
    //longitude =  json.location.longitude;

    return longitude;
  }
}
module.exports = BasePrayer;
