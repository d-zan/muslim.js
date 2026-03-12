/**
@template {keyof import("../../types/function").QuranAPIEndpointMap} T
*/
/**
 * @private
 * @param {import("../../types/quran/index").QuranAPIDomains} domain
 * @param {"v1"} version
 * @param {T} endpoint
 * @param {string} [content]
 */
async function quranAPI(domain, version = "v1", endpoint, content) {
    let url = ``;
    if (content) url = `https://${domain}/${version}/${endpoint}/${content}`;
    else url = `https://${domain}/${version}/${endpoint}`;
    
  const res = await fetch(url);
  return res;
}
module.exports = quranAPI;
