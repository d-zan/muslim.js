const { time, timeEnd } = require("console");
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

class BaseQuranText {
  /**
   * @param {import("../types/quran/types/quranText").QuranNameText} quran
   * @param {import("../types/quran/index").QuranAdvancedOptions} [options]
   */
  constructor(quran, options) {
    this.quran = quran;
    if (options) {
      /** @private */
      this.thereAOption = true;
      this.options = options;
    } else {
      this.thereAOption = false;
    }
  }
  /**
  * The edition: The Quran identifier.
  @returns {import("../types/quran/types/quranText").QuranIdentifierText}
  */
  get edition() {
    const edition = identifierByName[this.quran];
    return edition;
  }

  getFullQuran() {}
  getJuz() {}
  /**
   * @param {import("../types/quran/types/surah").SurahNames | number} surah - The Surah name or the number.
   * @returns {Promise<import("../types/quran/index").SurahText>}
   * @private
   */
  async getSurah(surah) {
    if (typeof surah === "number") {
      if (surah > 114) {
        throw new QuranTextError("The max number value of 'surah' is 114.");
      }
      if (surah < 1) {
        throw new QuranTextError("The min number value of 'surah' is 1.");
      }
      const res = await fetch(
        `${this.domain}/v1/surah/${surah}/${this.edition}`,
      );
      if (!res.ok) {
        const api = await res.json();
        throw AlQuranCloudAPIError(`(${api.code})[${api.status}]: ${api.data}`);
      }
      const json = await res.json();
      return json.data;
    } else if (typeof surah === "string") {
      const surahNumber = SurahNumberByName[surah];
      if (!surahNumber)
        throw new QuranTextError(
          "The string value of 'surah'  doesn't match the types values. Please try again with a correct type from package.",
        );
      const res = await fetch(
        `${this.domain}/v1/surah/${surahNumber}/${this.edition}`,
      );
      if (!res.ok)
        throw AlQuranCloudAPIError(`[${res.status}]: ${await res.text()}`);
      const json = await res.json();
      return json.data;
    } else {
      throw new QuranTextError(
        "The value of 'surah' must be string or number.",
      );
    }
  }
  /** @private */
  get domain() {
    if (
      this.thereAOption &&
      this.options &&
      this.options.domain &&
      this.options.domain.includes(this.options.domain)
    ) {
      return this.options.domain;
    } else {
      return "https://api.alquran.cloud";
    }
  }
  /**
   * @param {import("../types/quran/types/quranText").QuranIdentifierText} [edition] - Another edition?
   * @returns {Promise<import("../types/quran/text").TextEdition>}
   * @private
   */
  async getIdentifierInfo(edition) {
    const resEdit = await fetch(`${this.domain}/v1/edition`);
    if (!resEdit.ok) {
      throw AlQuranCloudAPIError(
        `[${resEdit.status}]: ${await resEdit.text()}`,
      );
    }
   // time("How much time by find");
    const editions = await resEdit.json();
    const theEdition = editions.data.find((e) => e.identifier === edition);
    //timeEnd("How much time by find");
    if (!theEdition) { 
        throw new QuranTextError("[CANT_FOUND]:The Quran edition is undefined");
    }
    return theEdition;
  }
}
module.exports = BaseQuranText;
