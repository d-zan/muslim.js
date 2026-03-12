import { JuzText, QuranFullText, SurahText, TextEdition, SearchText } from "../quran/";

interface SurahTextAPI {
  code: number;
  status: string;
  data: SurahText | string;
}
interface TextEditionAPI {
  code: number;
  status: string;
  data: TextEdition[] | string;
}

interface FullQuranTextAPI {
  code: number;
  status: string;
  data: QuranFullText | string;
}

interface JuzTextAPI {
  code: number;
  status: string;
  data: JuzText | string;
}

interface SearchTextAPI {
  code: number;
  status: string;
  data: SearchText | string ;
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
  'search': SearchTextAPI;
}