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
class QuranText extends BaseQuranText {
  /**
   * @param {import("../types/quran/types/quranText").QuranNameText} quran
   * @param {import("../types/quran/index").QuranAdvancedOptions} [options]
   */
  constructor(quran, options) {
    super(quran, options);
    this.quran = quran;
  }
  full() {}
  juz() {}
  /**
   * Get a Surah from Quran
   * @param {import("../types/quran/types/surah").SurahNames | number} surah - The Surah name or the number.
   */
  async surah(surah) {
    return await this.getSurah(surah);
  }

  /**
   * Information about this Quran edition.
   * @param {import("../types/quran/types/quranText").QuranIdentifierText} [edition] - Another edition?
   */
  async editionInfo(edition = this.edition) {
    return await this.getIdentifierInfo(edition);
  }
}
module.exports = QuranText;
