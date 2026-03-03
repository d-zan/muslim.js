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
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}

export interface SurahText {
  number: number;
  name: SurahNames;
  englishName: SurahEnglishNames;
  englishNameTranslation: SurahEnglishNameTranslation;
  revelationType: SurahRevelationType;
  ayahs: AyahText[];
}
