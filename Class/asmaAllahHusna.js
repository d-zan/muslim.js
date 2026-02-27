const AllahNames = require("../Data/AsmaAllah.json");

class AsmaAllahHusnaError extends Error {
  get name() {
    return "AsmaAllahHusnaError";
  }
}
/**
 * The 99 names of Allah, in English and Arabic.
 */
class AsmaAllahHusna {
  /**
   * Get all the Asma Allah Husna - Returns the Arabic text with transliteration and meaning of each name
   * @returns {import("../types/index").AsmaAllahHusna[]}
   */
  all() {
    return AllahNames;
  }
  /**
   * Returns the Arabic text with transliteration and meaning
   * @param {number} number 1-99
   * @returns {import("../types/asmaAllahHusna").AsmaAllahHusna}
   */
  byNumber(number) {
    const names = AllahNames.find((name) => name.number === number);
    if (!names)
      throw new AsmaAllahHusnaError(
        "[NOT_FOUND]: Invalid number, it must be between 1 and 99."
      );
      return names
  }
  /**
    * Returns the Arabic text with transliteration and meaning
   @param {import("../types/asmaAllahHusna").AllahNames['ar']} arabic_name 
  */
  byArabicName(arabic_name) {
    const name = AllahNames.find((name) => name.name === arabic_name);
    if (!name) throw new Error("Name not found");
    return name;
  }
}
module.exports = AsmaAllahHusna;
