const identifierByName = require("../JS/identifierByName");
const SurahNumberByName = require("../JS/SurahNumberByName");
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
class QuranText {
  /**
   * @param {import("../types/quran/types/quranText").QuranNameText} quran
   */
  constructor(quran) {
    this.quran = quran;
  }
  /**
  @returns {import("../types/quran/types/quranText").QuranIdentifierText}
  */
  get edition() {
    const edition = identifierByName[this.quran];
    return edition;
  }
  /**
  Get a complete Quran.
  */
  full() {}
  juz() {}
  /**
   * Get a Surah from Quran
   * @param {import("../types/quran/types/surah").SurahNames | number} surah - The Surah name or the number.
   * @returns {Promise<import("../types/quran/index").SurahText>}
   */
  async surah(surah) {
    if (typeof surah === "number") {
      if (surah > 114)
        throw new QuranTextError("The max number value of 'surah' is 114.");
      if (surah < 1)
        throw new QuranTextError("The min number value of 'surah' is 1.");
      const res = await fetch(
        `https://api.alquran.cloud/v1/surah/${surah}/${this.edition}`,
      );
      if (!res.ok)
      throw AlQuranCloudAPIError(
        `[${res.status}]: ${await res.text()}`,
      );
      const json = await res.json();
      return json.data;
    } else {
      const surahNumber = SurahNumberByName[surah];
      if (!surahNumber)
        throw new QuranTextError(
          "The string of 'surah' value doesn't match the types values. Please try again with a correct type from package.",
        );
      const res = await fetch(
        `https://api.alquran.cloud/v1/surah/${surahNumber}/${this.edition}`,
      );
      if (!res.ok)
      throw AlQuranCloudAPIError(
        `[${res.status}]: ${await res.text()}`,
      );
      const json = await res.json();
      return json.data;
    }
  }

  /**
   * Information about this Quran edition.
  @param {import("../types/quran/types/quranText").QuranIdentifierText} [edition] - Another edition?
  @returns {Promise<import("../types/quran/text").TextEdition>}
   */
  async editionInfo(edition = this.edition) {
    const resEdit = await fetch("https://api.alquran.cloud/v1/edition");
    if (!resEdit.ok)
      throw AlQuranCloudAPIError(
        `[${resEdit.status}]: ${await resEdit.text()}`,
      );
    const editions = await resEdit.json();
    const theEdition = editions.data.filter((e) => e.identifier === edition);
    if (!theEdition)
      throw AlQuranCloudAPIError("The Quran edition is undefined");
    return theEdition[0];
  }
}
module.exports = QuranText;
