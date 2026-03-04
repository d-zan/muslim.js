import { QuranFullText, SurahText, TextEdition } from "../quran/";
interface SurahTextAPI {
code: number;
status: string;
data:SurahText;
}
interface TextEditionAPI {
code: number;
status: string;
data: TextEdition[];
};
interface FullQuranTextAPI {
code: number;
status: string;
data: QuranFullText
}
export type QuranAPIEndpoints = "surah" | "edition?format=text" | "quran" | "meta";
export interface QuranAPIEndpointMap {
"surah": SurahTextAPI;
"edition?format=text": TextEditionAPI;
"quran": FullQuranTextAPI;
"meta": any;
}
//export async function quranAPI(domain: QuranAPIDomains,version: "v1", type: T, content:string) { return Promise<Response> };
