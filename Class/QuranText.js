const BaseQuranText = require("../Base/baseQuranText");
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
 * Get anything in Quran with text format
*/
/**
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
   * @param {number} juz_number 
   */
  juz(juz_number) {}
/**
 * Get a full version of Quran
 * @param {import("../types/quran/").QuranIdentifierText} [edition] - Another edition?
 */
  async full(edition = this.edition) {
    return await this.getFullQuran(edition);
  }
}
module.exports = QuranText;
