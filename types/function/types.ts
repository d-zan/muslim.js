import { QuranAPIEndpointMap } from './api';
import { QuranTextNamesByLanguage } from './quran_class';
import { QuranAPIDomains, QuranAdvancedOptions } from './../quran/';
//import QuranText from '../../Class/QuranText';
export type quranAPIJSON = <T extends keyof QuranAPIEndpointMap>(domain: QuranAPIDomains,version: "v1", endpoint: T, content?:string) => Promise<QuranAPIEndpointMap[T]>;

export declare class QuranText<T extends keyof QuranTextNamesByLanguage> {
    constructor(language:T, quran:QuranTextNamesByLanguage[T], options:QuranAdvancedOptions);
}

