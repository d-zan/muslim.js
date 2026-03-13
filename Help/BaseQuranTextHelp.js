const { randomInt } = require("crypto");
const BaseQuranText = require("../Base/baseQuranText");
const { quranAPI, quranAPIData } = require("../Function");
const { SurahNumberByName } = require("../Tools");
/** @private try to help the Base class bt some method */
class BaseQuranTextHelp {
  /**
   * @param {number | "random" | import("../types/quran").JuzAdvancedOptions} juz
   * @param {BaseQuranText} thiss
   */
  juzHelpV1(juz, thiss) {
    const data = {};
    if (typeof juz === "string" && juz === "random") {
      data["number"] = randomInt(1, 30);
      data["content"] = data["number"] + "/" + thiss.edition;
      data["res"] = quranAPI(thiss.domain, "v1", "juz", data["content"]);
      data["json"] = quranAPIData(thiss.domain, "v1", "juz", data["content"]);

      return data;
    } else if (typeof juz === "number") {
      data["number"] = juz;
      data["content"] = data["number"] + "/" + thiss.edition;
      data["res"] = quranAPI(thiss.domain, "v1", "juz", data["content"]);
      data["json"] = quranAPIData(thiss.domain, "v1", "juz", data["content"]);

      return data;
    } else if (typeof juz === "object") {
      // Mr def::::
      data["domain"] = "api.alquran.cloud";
      data["identifier"] = "quran-uthmani-quran-academy";
      data["number"] = randomInt(1, 30);

      if (juz.domain) {
        data["domain"] = juz.domain;
      }
      if (juz.identifier) {
        data["identifier"] = juz.identifier;
      }
      if (juz.number && typeof juz.number === "number") {
        data["number"] = juz.number;
      } else if (typeof juz.number === "string" && juz.number === "random") {
        data["number"] = randomInt(1, 30);
      }

      data["content"] = data["number"] + "/" + data["identifier"];
      data["res"] = quranAPI(data["domain"], "v1", "juz", data["content"]);
      data["json"] = quranAPIData(data["domain"], "v1", "juz", data["content"]);

      return data;
    }
  }
  /**
  @param {import("../types/quran/").SurahNames | number} surah 
  @param {BaseQuranTextHelp} thiss 
  */
  surahHelpV1(surah, thiss) {
    const data = {};
    if (typeof surah === "string") {
      data["number"] = SurahNumberByName[surah];;
      data["content"] = data["number"] + "/" + thiss.edition;
      data["res"] = quranAPI(thiss.domain, "v1", "surah", data["content"]);
      data["json"] = quranAPIData(thiss.domain, "v1", "surah", data["content"]);

      return data;
    } else if (typeof surah === "number") {
      data["number"] = surah;
      data["content"] = data["number"] + "/" + thiss.edition;
      data["res"] = quranAPI(thiss.domain, "v1", "surah", data["content"]);
      data["json"] = quranAPIData(thiss.domain, "v1", "surah", data["content"]);

      return data;
    }
  }
}
module.exports = BaseQuranTextHelp;
