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
