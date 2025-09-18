const axios = require("axios");
class AladhanAPIError extends Error {
  get name() {
    return "AladhanAPIError";
  }
}
/**
 * Get the 99 beautiful names of Allah, in English and Arabic.
 */
class AsmaAllahHusna {
  /**
   * Get all the Asma Allah Husna - Returns the Arabic text with transliteration and meaning of each name
   * @returns {Promise<import("../types/index").AsmaAllahHusna>}
   */
  async all() {
    const ax = await axios.get("https://api.aladhan.com/v1/asmaAlHusna");
    const data = ax.data;
    return data;
  }
  /**
   * Returns the Arabic text with transliteration and meaning
   * @param {number} number
   * @returns {Promise<import("../types/index").AsmaAllahHusna>}
   */
  async byNumber(number) {
    const ax = await axios.get(
      `https://api.aladhan.com/v1/asmaAlHusna/${number}`
    );
    try {
        const data = ax.data;
        return data;
    } catch (error) {
        if (error.code === 404) {
            throw AladhanAPIError("[NOT_FOUND]: Please specify a valid number or list of comma separated numbers between 1 and 99")
        }
    }
  }
}
module.exports = AsmaAllahHusna