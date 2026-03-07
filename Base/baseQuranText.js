//const { time, timeEnd } = require("console");
const identifierByName = require("../Tools/identifierByName");
const SurahNumberByName = require("../Tools/SurahNumberByName");
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

class BaseQuranText {
  /**
   * @param {import("../types/quran/").QuranNameText} quran
   * @param {import("../types/quran/").QuranAdvancedOptions} [options]
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
  @returns {import("../types/quran/").QuranIdentifierText}
  */
  get edition() {
    const edition = identifierByName[this.quran];
    return edition;
  }
  /**
   * @param {import("../types/quran/").QuranIdentifierText} [edition] - Another edition?
   *
   */
  async getFullQuran(edition = this.edition) {
    const res = await quranAPI(this.domain, "v1", "quran", edition);
    const json = await quranAPIData(this.domain,"v1","quran",edition);
    if (!res.ok) {
        const api = json;
        throw new AlQuranCloudAPIError(`(${api.code})[${api.status}]: ${api.data}`);
      }

      return json.data;
  }
  getJuz() {}
  /**
   * @param {import("../types/quran/").SurahNames | number} surah - The Surah name or the number.
   * @private
   */
  async getSurah(surah) {
    if (typeof surah === "number") {
      if (surah > 114) {
        throw new QuranTextError(
          "[MAX_VALUE]: The max number value of 'surah' is 114.",
        );
      }
      if (surah < 1) {
        throw new QuranTextError(
          "[MIN_VALUE]: The min number value of 'surah' is 1.",
        );
      }
      const content = `${surah}/${this.edition}`;
      const json = await quranAPIData(this.domain, "v1", "surah", content);
      const res = await quranAPI(this.domain, "v1", "surah", content);

      if (!res.ok) {
        const api = json;
        throw new AlQuranCloudAPIError(`(${api.code})[${api.status}]: ${api.data}`);
      }

      return json.data;
    } else if (typeof surah === "string") {
      const surahNumber = SurahNumberByName[surah];
      if (!surahNumber) {
        throw new QuranTextError(
          "The string value of 'surah' doesn't match the types values. Please try again with a correct string from package.",
        );
      }
      const content = `${surahNumber}/${this.edition}`;
      const json = await quranAPIData(this.domain, "v1", "surah", content);
      const res = await quranAPI(this.domain, "v1", "surah", content);

      if (!res.ok) {
        const api = json;
        throw new AlQuranCloudAPIError(`(${api.code})[${api.status}]: ${api.data}`);
      }

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
      return "api.alquran.cloud";
    }
  }
  /**
   * @param {import("../types/quran/").QuranIdentifierText} [edition] - Another edition?
   * @private
   */
  async getIdentifierInfo(edition) {
    const res = await quranAPI(this.domain, "v1", "edition?format=text");
    const json = await quranAPIData(this.domain, "v1", "edition?format=text");
    if (!res.ok) {
      const api = json;
      throw new AlQuranCloudAPIError(`(${api.code})[${api.status}]: ${api.data}`);
    }

    // time("How much time by find");
    const editions = json.data;
    const theEdition = editions.find((e) => e.identifier === edition);
    //timeEnd("How much time by find");
    if (!theEdition) {
      throw new QuranTextError("[CANT_FOUND]: The Quran edition is undefined");
    }
    return theEdition;
  }
}
module.exports = BaseQuranText;
