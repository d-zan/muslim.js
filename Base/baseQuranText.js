//const { time, timeEnd } = require("console");
//const identifierByName = require("../Tools/identifierByName");
//const SurahNumberByName = require("../Tools/SurahNumberByName");
const { quranAPIData, quranAPI } = require("../Function");
const { randomInt } = require("crypto");
const {
  BaseQuranTextError,
  AlQuranCloudAPIError,
  identifierByName,
  SurahNumberByName,
} = require("../Tools");

class BaseQuranText {
  /**
   * @template {keyof import("../types/function").QuranTextNamesByLanguage} T
   * @param {T} language
   * @param {import("../types/quran/").QuranNameText} quran
   * @param {import("../types/quran/").QuranAdvancedOptions} [options]
   */
  constructor(language, quran, options) {
    this.quran = quran;
    this.language = language;
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
   * @private
   */
  async getFullQuran(edition = this.edition) {
    const res = await quranAPI(this.domain, "v1", "quran", edition);
    const json = await quranAPIData(this.domain, "v1", "quran", edition);
    if (!res.ok && typeof json.data === "string") {
      throw new AlQuranCloudAPIError(
        `(${json.code})[${json.status}]: ${json.data}`,
      );
    } else if (res.ok && typeof json.data === "object") return json.data;
  }

  /**
   * @param {number | "random" | import("../types/quran").JuzAdvancedOptions} juz
   * @private
   */
  async getJuz(juz) {
    if (typeof juz === "string" && juz === "random") {
      const number = randomInt(1, 30);
      const res = await quranAPI(
        this.domain,
        "v1",
        "juz",
        number + "/" + this.edition,
      );
      const json = await quranAPIData(
        this.domain,
        "v1",
        "juz",
        number + "/" + this.edition,
      );
      if (!res.ok && typeof json.data === "string") {
        throw new AlQuranCloudAPIError(
          `(${json.code})[${json.status}]: ${json.data}`,
        );
      } else if (res.ok && typeof json.data === "object") return json.data;
    } else if (typeof juz === "number") {
      if (!juz) {
        throw new BaseQuranTextError(
          "[JUZ_NUMBER_NOT_FOUND]: Add a number between 1 to 30.",
        );
      }
      if (juz < 1 || juz > 30) {
        throw new BaseQuranTextError(
          "[JUZ_NUMBER_VALUE]: The min value of 'juz_number' is 1 and the max value is 30.",
        );
      }
      const number = juz;
      const res = await quranAPI(
        this.domain,
        "v1",
        "juz",
        number + "/" + this.edition,
      );
      const json = await quranAPIData(
        this.domain,
        "v1",
        "juz",
        number + "/" + this.edition,
      );
      if (!res.ok && typeof json.data === "string") {
        throw new AlQuranCloudAPIError(
          `(${json.code})[${json.status}]: ${json.data}`,
        );
      } else if (res.ok && typeof json.data === "object") return json.data;
    } else if (typeof juz === "object") {
      let domain = "api.alquran.cloud";
      let identifier = "quran-uthmani-quran-academy";
      let number = randomInt(1, 30);
      if (juz.domain) {
        domain = juz.domain;
      }
      if (juz.identifier) {
        identifier = juz.identifier;
      }
      if (juz.number && typeof juz.number === "number") {
        number = juz.number;
      } else if (typeof juz.number === "string" && juz.number === "random") {
        number = randomInt(1, 30);
      }
      const res = await quranAPI(
        domain,
        "v1",
        "juz",
        number + "/" + identifier,
      );
      const json = await quranAPIData(
        domain,
        "v1",
        "juz",
        number + "/" + identifier,
      );
      if (!res.ok && typeof json.data === "string") {
        throw new AlQuranCloudAPIError(
          `(${json.code})[${json.status}]: ${json.data}`,
        );
      } else if (res.ok && typeof json.data === "object") return json.data;
    } else {
      throw new BaseQuranTextError(
        "[JUZ_ERROR]: The value of 'juz' must be number between 1 to 30 or string('random'). or advanced object",
      );
    }
  }
  /**
   * @param {import("../types/quran/").SurahNames | number} surah - The Surah name or the number.
   * @private
   */
  async getSurah(surah) {
    if (typeof surah === "number") {
      if (surah > 114) {
        throw new BaseQuranTextError(
          "[MAX_VALUE]: The max number value of 'surah' is 114.",
        );
      }
      if (surah < 1) {
        throw new BaseQuranTextError(
          "[MIN_VALUE]: The min number value of 'surah' is 1.",
        );
      }
      const content = `${surah}/${this.edition}`;
      const json = await quranAPIData(this.domain, "v1", "surah", content);
      const res = await quranAPI(this.domain, "v1", "surah", content);

      if (!res.ok && typeof json.data === "string") {
        throw new AlQuranCloudAPIError(
          `(${json.code})[${json.status}]: ${json.data}`,
        );
      } else if (res.ok && typeof json.data === "object") return json.data;
    } else if (typeof surah === "string") {
      const surahNumber = SurahNumberByName[surah];
      if (!surahNumber) {
        throw new BaseQuranTextError(
          "The string value of 'surah' doesn't match the types values. Please try again with a correct string from package.",
        );
      }
      const content = `${surahNumber}/${this.edition}`;
      const json = await quranAPIData(this.domain, "v1", "surah", content);
      const res = await quranAPI(this.domain, "v1", "surah", content);

      if (!res.ok && typeof json.data === "string") {
        throw new AlQuranCloudAPIError(
          `(${json.code})[${json.status}]: ${json.data}`,
        );
      } else if (res.ok && typeof json.data === "object") return json.data;
    } else {
      throw new BaseQuranTextError(
        "The value of 'surah' must be string or number.",
      );
    }
  }

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
    if (!res.ok && typeof json.data === "string") {
      throw new AlQuranCloudAPIError(
        `(${json.code})[${json.status}]: ${json.data}`,
      );
    } else if (res.ok && typeof json.data === "object") {
      const editions = json.data;
      const theEdition = editions.find((e) => e.identifier === edition);
      if (!theEdition) {
        throw new BaseQuranTextError(
          "[CANT_FOUND]: The Quran edition is undefined",
        );
      }
      return theEdition;
    }
  }

  /**
   * @private
   * @param {string} keyword
   * @param {import("../types/quran").SurahNames | number | "random" | "all"} surah
   * @param {"language" | "edition"} type
   */
  async searchKeyword(keyword = "الله", surah = "random", type = "edition") {
    if (typeof surah === "number") {
      const number = surah;
      if (number < 1 || number > 114) {
        throw new BaseQuranTextError(
          "[SURAH_NUMBER_ERROR]: The number value of 'surah' must be between 1 to 114. ",
        );
      }
      let theType = this.edition;
      if (type === "edition") theType = this.edition;
      if (type === "language") theType = this.language;
      const content = `${keyword}/${number}/${theType}`;

      const res = await quranAPI(this.domain, "v1", "search", content);
      const dataAPI = await quranAPIData(this.domain, "v1", "search", content);
      const { data, status, code } = dataAPI;
      if (!res.ok && typeof data === "string") {
        throw new AlQuranCloudAPIError(`(${code})[${status}]: ${data}`);
      } else if (res.ok && typeof data === "object") return data;
      //SurahNames
    } else if (
      typeof surah === "string" &&
      surah !== "random" &&
      surah !== "all"
    ) {
      const number = SurahNumberByName[surah];
      if (!number) {
        throw new BaseQuranTextError(
          "[SURAH_NAME_ERROR]: The string value of 'surah' doesn't match any known Surah name. Please use a valid Surah name from the package types.",
        );
      }
      let theType = this.edition;
      if (type === "edition") theType = this.edition;
      if (type === "language") theType = this.language;
      const content = `${keyword}/${number}/${theType}`;

      const res = await quranAPI(this.domain, "v1", "search", content);
      const dataAPI = await quranAPIData(this.domain, "v1", "search", content);
      const { data, status, code } = dataAPI;
      if (!res.ok && typeof data === "string") {
        throw new AlQuranCloudAPIError(`(${code})[${status}]: ${data}`);
      } else if (res.ok && typeof data === "object") return data;
      //Random
    } else if (typeof surah === "string" && surah === "random") {
      const number = randomInt(1, 114);
      let theType = this.edition;
      if (type === "edition") theType = this.edition;
      if (type === "language") theType = this.language;
      const content = `${keyword}/${number}/${theType}`;

      const res = await quranAPI(this.domain, "v1", "search", content);
      const dataAPI = await quranAPIData(this.domain, "v1", "search", content);
      const { data, status, code } = dataAPI;
      if (!res.ok && typeof data === "string") {
        throw new AlQuranCloudAPIError(`(${code})[${status}]: ${data}`);
      } else if (res.ok && typeof data === "object") return data;
    } else if (typeof surah === "string" && surah === "all") {
      const number = "all";
      let theType = this.edition;
      if (type === "edition") theType = this.edition;
      if (type === "language") theType = this.language;
      const content = `${keyword}/${number}/${theType}`;

      const res = await quranAPI(this.domain, "v1", "search", content);
      const dataAPI = await quranAPIData(this.domain, "v1", "search", content);
      const { data, status, code } = dataAPI;
      if (!res.ok && typeof data === "string") {
        throw new AlQuranCloudAPIError(`(${code})[${status}]: ${data}`);
      } else if (res.ok && typeof data === "object") return data;
    }
  }
  /**
   * @private
   * @param {import("../types/quran").SearchTextAdvancedOptions} [options]
   * @default
   */
  async searchKeywordAdv(options) {
    const defaultOptions = {
      surah: "random",
      type: "ar",
      domain: "api.alquran.cloud",
      keyword: "الله",
    };
    if (!options) options = defaultOptions;
    else options = options;
    const { surah, type, domain, keyword } = options;

    if (typeof surah === "number") {
      const number = surah;
      if (number < 1 || number > 114) {
        throw new BaseQuranTextError(
          "[SURAH_NUMBER_ERROR]: The number value of 'surah' must be between 1 to 114. ",
        );
      }

      const content = `${keyword}/${number}/${type}`;
      const res = await quranAPI(domain, "v1", "search", content);
      const dataAPI = await quranAPIData(domain, "v1", "search", content);
      const { data, status, code } = dataAPI;

      if (!res.ok && typeof data === "string") {
        throw new AlQuranCloudAPIError(`(${code})[${status}]: ${data}`);
      } else if (res.ok && typeof data === "object") return data;

      //SurahNames
    } else if (
      typeof surah === "string" &&
      surah !== "random" &&
      surah !== "all"
    ) {
      const number = SurahNumberByName[surah];
      if (!number) {
        throw new BaseQuranTextError(
          "[SURAH_NAME_ERROR]: The string value of 'surah' doesn't match any known Surah name. Please use a valid Surah name from the package types.",
        );
      }
      const content = `${keyword}/${number}/${type}`;
      const res = await quranAPI(domain, "v1", "search", content);
      const dataAPI = await quranAPIData(domain, "v1", "search", content);
      const { data, status, code } = dataAPI;

      if (!res.ok && typeof data === "string") {
        throw new AlQuranCloudAPIError(`(${code})[${status}]: ${data}`);
      } else if (res.ok && typeof data === "object") return data;

      //Random
    } else if (typeof surah === "string" && surah === "random") {
      const number = randomInt(1, 114);
      const content = `${keyword}/${number}/${type}`;
      const res = await quranAPI(this.domain, "v1", "search", content);
      const dataAPI = await quranAPIData(this.domain, "v1", "search", content);
      const { data, status, code } = dataAPI;

      if (!res.ok && typeof data === "string") {
        throw new AlQuranCloudAPIError(`(${code})[${status}]: ${data}`);
      } else if (res.ok && typeof data === "object") return data;
    } else if (typeof surah === "string" && surah === "all") {
      const number = "all";
      const content = `${keyword}/${number}/${type}`;
      const res = await quranAPI(this.domain, "v1", "search", content);
      const dataAPI = await quranAPIData(this.domain, "v1", "search", content);
      const { data, status, code } = dataAPI;

      if (!res.ok && typeof data === "string") {
        throw new AlQuranCloudAPIError(`(${code})[${status}]: ${data}`);
      } else if (res.ok && typeof data === "object") return data;
    }
  }
}
module.exports = BaseQuranText;
