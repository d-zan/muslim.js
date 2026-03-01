const identifierByName = require("../JS/identifierByName");

/**
 * Get anything in Quran with format (Text)
 */
class QuranText {
  /**
   *
   * @param {import("../types/quran/text").QuranLanguageText} language - The language of 
   * @param {import("../types/quran/text").QuranNameText} quran
   */
  constructor(language, quran) {
    const edition = identifierByName[quran];
    this.edition = edition;
    this.language = language;
    this.quran = quran;
  }
}
