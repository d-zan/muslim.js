const { randomInt } = require("crypto");
const BaseQuranText = require("../Base/baseQuranText");
const quranAPI = require("../Function/API/quranApi");
const quranAPIData = require("../Function/API/quranAPIData");
class QuranTextError extends Error {
  get name() {
    return "QuranTextError";
  }
}
class AlQuranCloudAPIError extends Error {
  get name() {
    return "AlQuranCloudAPIError";
  }
}
/**
*/
/**
* Get anything in Quran with text format
@template {keyof import("../types/function").QuranTextNamesByLanguage} T
@implements {import("../types/function").QuranText<T>}
*/
class QuranText extends BaseQuranText {
  /**
  @param {T} language 
  @param {import("../types/function").QuranTextNamesByLanguage[T]} quran 
  @param {import("../types/quran").QuranAdvancedOptions} options 
  */
  constructor(language, quran, options) {
    super(quran, options);
    this.quran = quran;
  }
  /**
   * Information about this Quran edition.
   * @param {import("../types/quran").QuranIdentifierText} [edition] - Another edition?
   */
  async editionInfo(edition = this.edition) {
    return await this.getIdentifierInfo(edition);
  }
  /**
   * Get a Surah from Quran
   * @param {import("../types/quran").SurahNames | number} surah - The Surah name or the number.
   */
  async surah(surah) {
    return await this.getSurah(surah);
  }
  /**
   * Get Juz in Quran
   * @param {number | "random"} juz_number min: 1, max: 30.
   */
 async juz(juz_number) {
  if (typeof juz_number === "string" && juz_number === "random") {
    const number = randomInt(1,30);
    const res = await quranAPI(this.domain,"v1","juz",number+"/"+ this.edition);
    const json = await quranAPIData(this.domain,"v1","juz",number+"/"+ this.edition);
    if (!res.ok) {
     const api = json;
     throw new AlQuranCloudAPIError(`(${api.code})[${api.status}]: ${api.data}`);
    }
///TODO: Complete here>>>>>
  } else {
    if (!juz_number) {
      throw new QuranTextError("[JUZ_NUMBER_NOT_FOUND]: Add a number between 1 to 30.");
    }
    if (juz_number < 1 || juz_number > 30) {
      throw new QuranTextError("[JUZ_NUMBER_VALUE]: The min value of 'juz_number' is 1 and the max value is 30.");
    } 
  }
}
/**
 * Get a full version of Quran
 * @param {import("../types/quran/").QuranIdentifierText} [edition] - Another edition?
 */
  async full(edition = this.edition) {
    return await this.getFullQuran(edition);
  }
}
module.exports = QuranText;
