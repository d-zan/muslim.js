//#region Prayer
export type Method =
  | "Jafari / Shia Ithna-Ashari"
  | "University of Islamic Sciences, Karachi"
  | "Islamic Society of North America"
  | "Muslim World League"
  | "Umm Al-Qura University, Makkah"
  | "Egyptian General Authority of Survey"
  | "Institute of Geophysics, University of Tehran"
  | "Gulf Region"
  | "Kuwait"
  | "Qatar"
  | "Majlis Ugama Islam Singapura, Singapore"
  | "Union Organization islamic de France"
  | "Diyanet İşleri Başkanlığı, Turkey"
  | "Spiritual Administration of Muslims of Russia"
  //(also requires shafaq parameter)
  | "Moonsighting Committee Worldwide"
  | "Dubai"
  //(JAKIM)
  | "Jabatan Kemajuan Islam Malaysia"
  | "Tunisia"
  | "Algeria"
  //KEMENAG
  | "Kementerian Agama Republik Indonesia"
  | "Morocco"
  | "Comunidade Islamica de Lisboa"
  | "Ministry of Awqaf, Islamic Affairs and Holy Places, Jordan"
  //See https://aladhan.com/calculation-methods
  | "Custom";
export interface MethodNumber {
  "Jafari / Shia Ithna-Ashari": 0;
  "University of Islamic Sciences, Karachi": 1;
  "Islamic Society of North America": 2;
  "Muslim World League": 3;
  "Umm Al-Qura University, Makkah": 4;
  "Egyptian General Authority of Survey": 5;
  "Institute of Geophysics, University of Tehran": 7;
  "Gulf Region": 8;
  Kuwait: 9;
  Qatar: 10;
  "Majlis Ugama Islam Singapura, Singapore": 11;
  "Union Organization islamic de France": 12;
  "Diyanet İşleri Başkanlığı, Turkey": 13;
  "Spiritual Administration of Muslims of Russia": 14;
  //(also requires shafaq parameter)
  "Moonsighting Committee Worldwide": 15;
  Dubai: 16;
  /**(JAKIM)*/
  "Jabatan Kemajuan Islam Malaysia": 17;
  Tunisia: 18;
  Algeria: 19;
  /**KEMENAG*/
  "Kementerian Agama Republik Indonesia": 20;
  Morocco: 21;
  "Comunidade Islamica de Lisboa": 22;
  "Ministry of Awqaf, Islamic Affairs and Holy Places, Jordan": 23;
  /**See https://aladhan.com/calculation-methods*/
  Custom: 99;
}
/**
 *!0 - Jafari / Shia Ithna-Ashari
 *!1 - University of Islamic Sciences, Karachi
 *!2 - Islamic Society of North America
 *!3 - Muslim World League
 *!4 - Umm Al-Qura University, Makkah
 *!5 - Egyptian General Authority of Survey
 *!7 - Institute of Geophysics, University of Tehran
 *!8 - Gulf Region
 *!9 - Kuwait
 *!10 - Qatar
 *!11 - Majlis Ugama Islam Singapura, Singapore
 *!12 - Union Organization islamic de France
 *!13 - Diyanet İşleri Başkanlığı, Turkey
 *!14 - Spiritual Administration of Muslims of Russia
 *!15 - Moonsighting Committee Worldwide (also requires shafaq parameter)
 *!16 - Dubai (experimental)
 *!17 - Jabatan Kemajuan Islam Malaysia (JAKIM)
 *!18 - Tunisia
 *!19 - Algeria
 *!20 - KEMENAG - Kementerian Agama Republik Indonesia
 *!21 - Morocco
 *!22 - Comunidade Islamica de Lisboa
 *!23 - Ministry of Awqaf, Islamic Affairs and Holy Places, Jordan
 *!99 - Custom. See https://aladhan.com/calculation-methods
 */

/**
 *
 */
export interface AllPrayTime {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird: string;
  Lastthird: string;
}
export interface NextPray {
  pray: {
    en: string;
    ar: string;
  };
  time: string;
}

//#endregion

//#region Hijri

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

interface CurrentIslamicYear {
  code: number;
  status: string;
  data: number;
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
//#endregion

//#region AsmaAllahHusna

export interface AsmaAllahHusna {
  name: string;
  transliteration: string;
  number: number;
  en: {
    meaning: string;
  };
}
export type AllahNames_Ar =
  | "الرَّحْمَنُ"
  | "الرَّحِيمُ"
  | "الْمَلِكُ"
  | "الْقُدُّوسُ"
  | "السَّلاَمُ"
  | "الْمُؤْمِنُ"
  | "الْمُهَيْمِنُ"
  | "الْعَزِيزُ"
  | "الْجَبَّارُ"
  | "الْمُتَكَبِّرُ"
  | "الْخَالِقُ"
  | "الْبَارِئُ"
  | "الْمُصَوِّرُ"
  | "الْغَفَّارُ"
  | "الْقَهَّارُ"
  | "الوَهَّابُ"
  | "الرَّزَّاقُ"
  | "الْفَتَّاحُ"
  | "اَلْعَلِيْمُ"
  | "الْقَابِضُ"
  | "الْبَاسِطُ"
  | "الْخَافِضُ"
  | "الرَّافِعُ"
  | "المُعِزُّ"
  | "المُذِلُّ"
  | "السَّمِيعُ"
  | "البَصِيرُ"
  | "الْحَكَمُ"
  | "الْعَدْلُ"
  | "اللَّطِيفُ"
  | "الْخَبِيرُ"
  | "الْحَلِيمُ"
  | "الْعَظِيمُ"
  | "الْغَفُورُ"
  | "الشَّكُورُ"
  | "العَلِيُّ"
  | "الكَبِيرُ"
  | "الحَفِيظُ"
  | "المقيِتُ"
  | "الحسيبُ"
  | "الجَلِيلُ"
  | "الكَرِيمُ"
  | "الرَّقِيبُ"
  | "المجِيبُ"
  | "الوَاسِعُ"
  | "الحكيمُ"
  | "الوَدودُ"
  | "المجيدُ"
  | "الباعثُ"
  | "الشَّهِيدُ"
  | "الحَقُّ"
  | "الوَكِيلُ"
  | "القَوِيُّ"
  | "المتينُ"
  | "الوليُّ"
  | "الحَميد";
//#endregion
