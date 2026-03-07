import { JuzText, QuranFullText, SurahText, TextEdition } from "../quran/";
interface SurahTextAPI {
  code: number;
  status: string;
  data: SurahText;
}
interface TextEditionAPI {
  code: number;
  status: string;
  data: TextEdition[];
}
interface FullQuranTextAPI {
  code: number;
  status: string;
  data: QuranFullText;
}
interface JuzTextAPI {
  code: number;
  status: string;
  data: JuzText;
}
export type QuranAPIEndpoints =
  | "surah"
  | "edition?format=text"
  | "quran"
  | "meta"
  | "juz";
export interface QuranAPIEndpointMap {
  "surah": SurahTextAPI;
  "edition?format=text": TextEditionAPI;
  "quran": FullQuranTextAPI;
  "juz": JuzTextAPI;
  "meta": any;
}