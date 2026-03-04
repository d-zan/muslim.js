import { QuranFullText, SurahText, TextEdition } from "../quran/";
interface SurahAPITextInterface {
code: number;
status: string;
data:SurahText;
}
interface EditionAPITextInterface {
code: number;
status: string;
data: TextEdition[];
};
interface FullQuranAPITextInterface {
code: number;
status: string;
data: QuranFullText
}
export type QuranAPIEndpoints = "surah" | "edition?format=text" | "quran" | "meta";
export interface QuranApiEndpointMap {
"surah": SurahAPITextInterface;
"edition?format=text": EditionAPITextInterface;
"quran": FullQuranAPITextInterface;
"meta": any;
}
//export async function quranAPI(domain: QuranAPIDomains,version: "v1", type: T, content:string) { return Promise<Response> };
