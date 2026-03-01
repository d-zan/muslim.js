export type QuranType =
  | "tafsir"
  | "translation"
  | "quran"
  | "transliteration"
  | "versebyverse";
export type QuranFormat = "text" | "audio";
export type QuranReadDirection = "rtl" | "ltr" | null;

export interface Ayah {
            "number": number,
            "text": string
            "numberInSurah": number,
            "juz": number,
            "manzil": number,
            "page": number,
            "ruku": number,
            "hizbQuarter": number,
            "sajda": boolean
}
interface Surah {
        "number": 1,
        "name": "سُورَةُ ٱلْفَاتِحَةِ",
        "englishName": "Al-Faatiha",
        "englishNameTranslation": "The Opening",
        "revelationType": "Meccan",
        "ayahs":Ayah[]
}



