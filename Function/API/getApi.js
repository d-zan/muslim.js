class AladhanAPIError extends Error {
  get name() {
    return "AladhanAPIError";
  }
}
/**
 * @param {string} api
 * @private
 */
async function getAPI(api) {
  const data = await fetch(api);
  if (!data.ok) {
    throw new AladhanAPIError(`[${data.status}]: ${data.statusText}`);
  }
  const json = await data.json();
  return json;
}
module.exports = getAPI;
