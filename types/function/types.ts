import { QuranApiEndpointMap } from './api';
import { QuranAPIDomains } from './../quran/';
export type quranAPIJSON = <T extends keyof QuranApiEndpointMap>(domain: QuranAPIDomains,version: "v1", endpoint: T, content?:string) => Promise<QuranApiEndpointMap[T]>;