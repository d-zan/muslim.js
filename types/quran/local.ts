export type QuranType =
  | "tafsir"
  | "translation"
  | "quran"
  | "transliteration"
  | "versebyverse";
export type QuranFormat = "text" | "audio";
export type QuranReadDirection = "rtl" | "ltr" | null;

export type LocalQuranLanguage = "ar" | "en";
export type LocalQuranIdentifier = "ar.muyassar" | "en.asad" | "quran-simple";
export type LocalQuranName =
  | (typeof import("../Data/Quran/Editions/ar.json"))[0]["name"]
  | (typeof import("../Data/Quran/Editions/en.json"))[1]["name"];
export type LocalQuranEnglishName =
  | (typeof import("../Data/Quran/Editions/ar.json"))[0]["englishName"]
  | (typeof import("../Data/Quran/Editions/en.json"))[1]["englishName"];

export interface LocalEdition {
  identifier: LocalQuranIdentifier;
  language: LocalQuranLanguage;
  name: LocalQuranName;
  englishName: LocalQuranEnglishName;
  format: QuranFormat;
  type: QuranType;
  direction: QuranReadDirection;
}