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
 * @template {keyof import("../types/function").QuranTextNamesByLanguage} T
 * @implements {import("../types/function").QuranText<T>}
 */
class QuranText extends BaseQuranText {
  /**
  @param {T} language 
  @param {import("../types/function").QuranTextNamesByLanguage[T]} quran 
  @param {import("../types/quran").QuranAdvancedOptions} options 
  */
  constructor(language, quran, options) {
    super(language,quran, options);
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
   * Get Juz in Quran,
   * @param {number | "random" | import("../types/quran").JuzAdvancedOptions} juz 
   * - number: min: 1, max: 30.
   * - string: "random".
   * - Advanced: 
  @default juz.domain : "api.alquran.cloud";
  @default juz.identifier : "quran-uthmani-quran-academy";
  @default juz.number : "random";
  @example
  <QuranText>.juz({
  domain: "api.alquran.cloud",
  identifier:"quran-uthmani-quran-academy",
  number: 1 //the number of juz.
  });
   */
  async juz(juz) {
    return this.getJuz(juz);
  }
  /**
   * Get a full version of Quran
   * @param {import("../types/quran/").QuranIdentifierText} [edition] - Another edition?
   */
  async full(edition = this.edition) {
    return await this.getFullQuran(edition);
  }
  /**
   * @overload
   * Searching about any word in the Quran.
   * How work: 
   - 1. Add the `keyword` then the `surah` 
   - 2. In the finial you will add the `type` 
   - 2.1 If you want search in all editions for the same language choose `language`
   - 2.2 If you want search in the edition you already choose it: choose `edition`
   * @param {string} keyword 
   * @param {import("../types/quran").SurahNames | number} surah 
   * @param {"language" | "edition"} type 
   */
  async search(keyword,surah,type) {

  }
  /**
  * @param {import("../types/quran").SearchTextAdvancedOptions} options 
  */
  async search(options) {
    if (options) {
  const { type } = options;

}
  }
}
module.exports = QuranText;
