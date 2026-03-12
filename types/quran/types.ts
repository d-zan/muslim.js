import { QuranIdentifierText, QuranLanguageText, SurahNames } from "./";

export type QuranType =
  | "tafsir"
  | "translation"
  | "quran"
  | "transliteration"
  | "versebyverse";
export type QuranFormat = "text" | "audio";
export type QuranReadDirection = "rtl" | "ltr" | null;

export type QuranAPIDomains =
  | "api.alquran.cloud"
  | "alquran.api.islamic.network"
  | "alquran.api.alislam.ru";
  
export interface QuranAdvancedOptions {
  domain: QuranAPIDomains;
}

export interface JuzAdvancedOptions {
  domain: QuranAPIDomains;
  identifier: QuranIdentifierText;
  number: number | "random";
}

export interface SearchTextAdvancedOptions {
  domain: QuranAPIDomains;
  type: QuranLanguageText | QuranIdentifierText;
  keyword: string;
  surah: SurahNames | number | "random" | "all";
}