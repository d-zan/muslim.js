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
export interface QuranSurahText {
  number: number;
  name: SurahNames;
  englishName: SurahEnglishNames;
  englishNameTranslation: SurahEnglishNameTranslation;
  revelationType: SurahRevelationType;
  ayahs: AyahText[];
}
export interface QuranFullText {
  surahs: QuranSurahText[];
  edition: TextEdition;
}
interface SurahJuzText {
number:number;
name:SurahNames;
englishName: SurahEnglishNames;
englishNameTranslation: SurahEnglishNameTranslation;
revelationType: SurahRevelationType;
numberOfAyahs:number;
}

interface AyahJuzText {
  number:number;
  text:string;
  surah: SurahJuzText;
  numberInSurah:number;
  juz:number;
  manzil:number;
  page:number;
  ruku:number;
  hizbQuarter:number;
  sajda:boolean;
}

export interface JuzText {
number:number;
ayahs:AyahJuzText[];
surahs: {
  [number:string]: SurahJuzText
};

edition:TextEdition;
}




