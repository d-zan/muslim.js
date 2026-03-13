const { randomInt } = require("crypto");
const BaseQuranText = require("../Base/baseQuranText");
const { quranAPI, quranAPIData } = require("../Function");

class BaseQuranTextHelp {
  /**
   * @param {number | "random" | import("../types/quran").JuzAdvancedOptions} juz
   * @param {BaseQuranText} thiss
   */
juzHelpV1(juz, thiss) {
    let number = 1;
    let content = "";
    let res = quranAPI(thiss.domain, "v1", "juz", content);
    let json = quranAPIData(thiss.domain, "v1", "juz", content);
    const data = {
      number,
      content,
      res,
      json,
    };
    if (typeof juz === "string" && juz === "random") {
      data["number"] = randomInt(1, 30);
      data["content"] = number + "/" + this.edition;
      data["res"] = quranAPI(this.domain, "v1", "juz", content);
      data["json"] = quranAPIData(this.domain, "v1", "juz", content);

      return data;
    } else if (typeof juz === "number") {
      data["number"] = juz;
      data["content"] = number + "/" + this.edition;
      data["res"] = quranAPI(this.domain, "v1", "juz", content);
      data["json"] = quranAPIData(this.domain, "v1", "juz", content);

      return data;
    } else if (typeof juz === "object") {
      // Mr def::::
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
        data["number"] = juz.number;
      } else if (typeof juz.number === "string" && juz.number === "random") {
        number = randomInt(1, 30);
        data["number"] = randomInt(1, 30);
      }

      data["content"] = number + "/" + identifier;
      data["res"] = quranAPI(domain, "v1", "juz", content);
      data["json"] = quranAPIData(domain, "v1", "juz", content);

      return data;
    }
  }
}
module.exports = BaseQuranTextHelp;
