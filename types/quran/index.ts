import {
  SurahNames,
  SurahEnglishNames,
  SurahEnglishNameTranslation,
  SurahRevelationType,
} from "./types/surah";

export type QuranType =
  | "tafsir"
  | "translation"
  | "quran"
  | "transliteration"
  | "versebyverse";
export type QuranFormat = "text" | "audio";
export type QuranReadDirection = "rtl" | "ltr" | null;

export interface AyahText {
  /** Ayah number in this edition */
  number: number;
  /** The content of ayah */
  text: string;
  /** Ayah number in the surah */
  numberInSurah: number;
  /**
  - The Juz in which this Ayah is found. The Quran is divided into 30 Juz.
  */
  juz: number;
  /**
   * The Manzil in which this Ayah is found. The Quran is divided into 7 Manzils.
   */
  manzil: number;
  /** 
  * The page in which this Ayah is found. The Quran is divided into 604 pages.
  */
  page: number;
  /**
  * The Ruku in which this Ayah is found. The Quran is divided into 558 Rukus.
  */
  ruku: number;
  /**
   * The Hizb quarter in which this Ayah is found. The Quran is divided into 240 Hizb quarters.
   */
  hizbQuarter: number;
  /**
  * This Ayah requires Sajda (prostration) when recited. There are 15 such Ayahs in the Quran.
  */
  sajda: {
    id:number;
    recommended:boolean;
    obligatory:boolean;
  } | boolean;
}

export interface SurahText {
  /** The number of surah in Quran */
  number: number;
  name: SurahNames;
  englishName: SurahEnglishNames;
  englishNameTranslation: SurahEnglishNameTranslation;
  revelationType: SurahRevelationType;
  ayahs: AyahText[];
}

type QuranDomains =
  | "https://api.alquran.cloud"
  | "https://alquran.api.islamic.network"
  | "https://alquran.api.alislam.ru";
export interface QuranAdvancedOptions {
  domain: QuranDomains;
}
