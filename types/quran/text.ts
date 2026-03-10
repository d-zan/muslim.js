import { QuranFormat, QuranReadDirection, QuranType } from "./index";
import {
  QuranNameText,
  QuranEnglishName,
  QuranIdentifierText,
  QuranLanguageText,
} from "./types/text";
import {
  SurahNames,
  SurahEnglishNames,
  SurahEnglishNameTranslation,
  SurahRevelationType,
} from "./types/surah";

export interface TextEdition {
  identifier: QuranIdentifierText;
  name: QuranNameText;
  englishName: QuranEnglishName;
  language: QuranLanguageText;
  direction: QuranReadDirection;
  format: "text";
  type: QuranType;
}

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
  edition: TextEdition;
}
export interface SurahQuranFullText {
  number: number;
  name: SurahNames;
  englishName: SurahEnglishNames;
  englishNameTranslation: SurahEnglishNameTranslation;
  revelationType: SurahRevelationType;
  ayahs: AyahText[];
}
export interface QuranFullText {
  surahs: SurahQuranFullText[];
  edition: TextEdition;
}

//#region Juz Text
export interface SurahJuzText {
  number: number;
  name: SurahNames;
  englishName: SurahEnglishNames;
  englishNameTranslation: SurahEnglishNameTranslation;
  revelationType: SurahRevelationType;
  numberOfAyahs: number;
}
export interface AyahJuzText {
  number: number;
  text: string;
  surah: SurahJuzText;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}
export interface JuzText {
  number: number;
  ayahs: AyahJuzText[];
  surahs: {
    [number: string]: SurahJuzText;
  };
  edition: TextEdition;
}
//#endregion
export interface MatchesTextEdition {
  identifier: QuranIdentifierText;
  name: QuranNameText;
  englishName: QuranEnglishName;
  language: QuranLanguageText;
  type: QuranType;
}
export interface MatchesTextSurah {
  number: number;
  name: SurahNames;
  englishName: SurahEnglishNames;
  englishNameTranslation: SurahEnglishNameTranslation;
  revelationType: SurahRevelationType;
}
export interface MatchesText {
  number: number;
  text: string;
  edition: MatchesTextEdition;
  surah: MatchesTextSurah;
  numberInSurah: number;
}

export interface SearchText {
  count: number;
  matches: MatchesText;
}
