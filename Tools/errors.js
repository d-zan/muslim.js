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
class HijriError extends Error {
  get name() {
    return "HijriError";
  }
}
module.exports = { AlQuranCloudAPIError, QuranTextError,HijriError };
