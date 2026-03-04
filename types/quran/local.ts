import { QuranFormat, QuranReadDirection, QuranType } from "./";
import { LocalQuranIdentifier, LocalQuranLanguage } from "./types/";
/*
export type LocalQuranName =
  | (typeof import("../Data/Quran/Editions/ar.json"))[0]["name"]
  | (typeof import("../Data/Quran/Editions/en.json"))[1]["name"];
export type LocalQuranEnglishName =
  | (typeof import("../Data/Quran/Editions/ar.json"))[0]["englishName"]
  | (typeof import("../Data/Quran/Editions/en.json"))[1]["englishName"];
*/
export interface LocalEdition {
  identifier: LocalQuranIdentifier;
  language: LocalQuranLanguage;
  //name: LocalQuranName;
  //englishName: LocalQuranEnglishName;
  format: QuranFormat;
  type: QuranType;
  direction: QuranReadDirection;
}
