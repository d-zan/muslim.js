const axios = require("axios");
class AladhanAPIError extends Error {
  get name() {
    return "AladhanAPIError";
  }
}
/**
 * The 99 names of Allah, in English and Arabic.
 */
class AsmaAllahHusna {
  /**
   * Get all the Asma Allah Husna - Returns the Arabic text with transliteration and meaning of each name
   * @returns {Promise<import("../types/index").AsmaAllahHusna[]>}
   */
  async all() {
    const api = "https://api.aladhan.com/v1/asmaAlHusna"
    const data = await fetch(api);
    if (!data.ok) throw new AladhanAPIError(`[${data.status}]: ${data.statusText}`);
    const json = await data.json();
    return await json.data;
  }
  /**
   * Returns the Arabic text with transliteration and meaning
   * @param {number} number
   * @returns {Promise<import("../types/index").AsmaAllahHusna>}
   */
  async byNumber(number) {
    const api = `https://api.aladhan.com/v1/asmaAlHusna`//`https://api.aladhan.com/v1/asmaAlHusna/${number}`

        const data = await fetch(api);
        const json = await data.json();
        if (data.status === 404) {
          throw new AladhanAPIError("[NOT_FOUND]: Please specify a valid number or list of comma separated numbers between 1 and 99")
        }
        if (!data.ok) throw new AladhanAPIError(`[${data.status}]: ${data.statusText}`);
    return await json.data[number - 1];

  }
}
module.exports = AsmaAllahHusna