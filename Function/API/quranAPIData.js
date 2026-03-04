/**
 * @type {import("../../types/function").quranAPIJSON}
 * @private
 * @param {import("../../types/quran/index").QuranAPIDomains} domain
 * @param {"v1"} version
 * @param {import("../../types/function/api").QuranAPIEndpoints} endpoint
 * @param {string} [content]
 */
async function quranAPIData(domain, version = "v1", endpoint, content) {
    let url = ``;
    if (content) url = `https://${domain}/${version}/${endpoint}/${content}`;
    else url = `https://${domain}/${version}/${endpoint}`;
    
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
module.exports = quranAPIData;
