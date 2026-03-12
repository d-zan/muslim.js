class QuranTextError extends Error {
  get name() {
    return "QuranTextError";
  }
}

class BaseQuranTextError extends Error {
  get name() {
    return "BaseQuranTextError";
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

class BaseHijriError extends Error {
  get name() {
    return "BaseHijriError";
  }
}

class AsmaAllahHusnaError extends Error {
  get name() {
    return "AsmaAllahHusnaError";
  }
}

class PrayerError extends Error {
  get name() {
    return "PrayerError";
  }
}

class BasePrayerError extends Error {
  get name() {
    return "BasePrayerError";
  }
}

class AladhanAPIError extends Error {
  get name() {
    return "AladhanAPIError";
  }
}

class MethodError extends Error {
  get name() {
    return "MethodError";
  }
}

/** @private */
module.exports = {
  AlQuranCloudAPIError,
  QuranTextError,
  BaseQuranTextError,
  HijriError,
  BaseHijriError,
  AsmaAllahHusnaError,
  PrayerError,
  BasePrayerError,
  AladhanAPIError,
  MethodError,
};
