import { QuranAPIEndpointMap } from './api';
import { QuranAPIDomains } from './../quran/';
export type quranAPIJSON = <T extends keyof QuranAPIEndpointMap>(domain: QuranAPIDomains,version: "v1", endpoint: T, content?:string) => Promise<QuranAPIEndpointMap[T]>;