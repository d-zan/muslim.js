const {AsmaAllahJSON} = require("../Data");
const { AsmaAllahHusnaError } = require("../Tools");
/**
 * The 99 names of Allah, in English and Arabic.
 */
class AsmaAllahHusna {
  /**
   * Get the 99 names of Allah - Returns the Arabic text with transliteration and meaning of each name
   * @returns {import("../types/").AsmaAllahHusna[]}
   */
  all() {
    return AsmaAllahJSON;
  }
  /**
   * Returns the Arabic text with transliteration and meaning
   * @param {number} number 1-99
   * @returns {import("../types/").AsmaAllahHusna}
   */
  byNumber(number) {
    const names = AsmaAllahJSON.find((name) => name.number === number);
    if (!names)
      throw new AsmaAllahHusnaError(
        "[NOT_FOUND]: Invalid number, it must be between 1 and 99."
      );
      return names
  }
  /**
    * Returns the Arabic text with transliteration and meaning
   @param {import("../types/").AllahNames['ar']} arabic_name 
  */
  byArabicName(arabic_name) {
    const name = AsmaAllahJSON.find((name) => name.name === arabic_name);
    if (!name) throw new Error("Name not found");
    return name;
  }
}
module.exports = AsmaAllahHusna;
