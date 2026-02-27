
export interface GregorianToHijriCalendar {
  hijri: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
      ar: string;
    };
    month: {
      number: number;
      en: string;
      ar: string;
      days: number;
    };
    year: string;
    designation: {
      abbreviated: string;
      expanded: string;
    };
    holidays: [any | string];
    adjustedHolidays: [string];
    method: string;
  };
  gregorian: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
    };
    month: {
      number: number;
      en: string;
    };
    year: string;
    designation: {
      abbreviated: string;
      expanded: string;
    };
    lunarSighting: boolean;
  };
}

export interface HijriToGregorianCalendar {
  hijri: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
      ar: string;
    };
    month: {
      number: number;
      en: string;
      ar: string;
      days: number;
    };
    year: string;
    designation: {
      abbreviated: string;
      expanded: string;
    };
    holidays: [any | string];
    adjustedHolidays: [string];
    method: string;
  };
  gregorian: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
    };
    month: {
      number: number;
      en: string;
    };
    year: string;
    designation: {
      abbreviated: string;
      expanded: string;
    };
    lunarSighting: boolean;
  };
}

export interface ConvertGregorianDateToHijriDate {
  hijri: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
      ar: string;
    };
    month: {
      number: number;
      en: string;
      ar: string;
      days: number;
    };
    year: string;
    designation: {
      abbreviated: string;
      expanded: string;
    };
    holidays: [any | string];
    adjustedHolidays: [string];
    method: string;
  };
  gregorian: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
    };
    month: {
      number: number;
      en: string;
    };
    year: string;
    designation: {
      abbreviated: string;
      expanded: string;
    };
    lunarSighting: boolean;
  };
}
export interface ConvertHijriDateToGregoriaDate {
  hijri: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
      ar: string;
    };
    month: {
      number: number;
      en: string;
      ar: string;
      days: number;
    };
    year: string;
    designation: {
      abbreviated: string;
      expanded: string;
    };
    holidays: [any | string];
    adjustedHolidays: [string];
    method: string;
  };
  gregorian: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
    };
    month: {
      number: number;
      en: string;
    };
    year: string;
    designation: {
      abbreviated: string;
      expanded: string;
    };
    lunarSighting: boolean;
  };
}

export interface NextHijriHoliday {
  hijri: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
      ar: string;
    };
    month: {
      number: number;
      en: string;
      ar: string;
      days: number;
    };
    year: string;
    designation: {
      abbreviated: string;
      expanded: string;
    };
    holidays: [any | string];
    adjustedHolidays: [string];
    method: string;
  };
  gregorian: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
    };
    month: {
      number: number;
      en: string;
    };
    year: string;
    designation: {
      abbreviated: string;
      expanded: string;
    };
    lunarSighting: boolean;
  };
}
export interface SpecialDays {
  month: number;
  day: number;
  name: string;
}
export interface IslamicMonth {
  number: number;
  en: string;
  ar: string;
}
export interface IslamicMonths {
  /** Muḥarram */
  1: {
    number: number;
    en: string;
    ar: string;
  };
  /** Ṣafar */
  2: {
    number: number;
    en: string;
    ar: string;
  };
  /** Rabīʿ al-awwal */
  3: {
    number: number;
    en: string;
    ar: string;
  };
  /** Rabīʿ al-thānī */
  4: {
    number: number;
    en: string;
    ar: string;
  };
  /** Jumādá al-ūlá */
  5: {
    number: number;
    en: string;
    ar: string;
  };
  /** Jumādá al-ākhirah */
  6: {
    number: number;
    en: string;
    ar: string;
  };
  /** Rajab */
  7: {
    number: number;
    en: string;
    ar: string;
  };
  /** Shaʿbān */
  8: {
    number: number;
    en: string;
    ar: string;
  };
  /** Ramaḍān */
  9: {
    number: number;
    en: string;
    ar: string;
  };
  /** Shawwāl */
  10: {
    number: number;
    en: string;
    ar: string;
  };
  /** Dhū al-Qaʿdah */
  11: {
    number: number;
    en: string;
    ar: string;
  };
  /** Dhū al-Ḥijjah */
  12: {
    number: number;
    en: string;
    ar: string;
  };
}
export interface HijriHolidaysByYear {
  hijri: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
      ar: string;
    };
    month: {
      number: number;
      en: string;
      ar: string;
      days: number;
    };
    year: string;
    designation: {
      abbreviated: string;
      expanded: string;
    };
    holidays: [any | string];
    adjustedHolidays: [string];
    method: string;
  };
  gregorian: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
    };
    month: {
      number: number;
      en: string;
    };
    year: string;
    designation: {
      abbreviated: string;
      expanded: string;
    };
    lunarSighting: boolean;
  };
}