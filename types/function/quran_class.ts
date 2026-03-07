type ar_QuranTextNames = 
| "تفسير المیسر"
| "القرآن الكريم المبسط (تشكيل بسيط) (simple)"
| "القرآن الكريم المبسط (بدون تشكيل) (simple-clean)"      
| "القرآن الكريم المبسط (بدون تشكيل) (simple-enhanced)"   
| "القرآن الكريم المبسط (بدون تشكيل) (simple-min)"        
| "القرآن الكريم برسم العثماني (تشكيل بسيط) (uthmani-min)"
| "القرآن الكريم برسم العثماني (uthmani)"
| "تفسير الجلالين"
| "القرآن الكريم المجود (ملون) (tajweed)"
| "معاني مفردات القرآن (wordbyword)"
| "القرآن الكريم للأطفال"
| "Corpus"
| "Buck"
| "معاني مفردات القرآن ولفظها (wordbyword-2)"
| "القرآن الكريم برسم العثماني (unicode)"
| "القرآن الكريم برسم العثماني (quran-academy)"
| "تفسير القرطبي"
| "تنوير المقباس من تفسير بن عباس"
| "الـتـفـسـيـر الـوسـيـط"
| "تفسير البغوي";

type az_QuranTextNames = 
| "Məmmədəliyev & Bünyadov"
| "Musayev";
type bn_QuranTextNames = 
| "মুহিউদ্দীন খান"
| "জহুরুল হক";
type cs_QuranTextNames = 
| "Hrbek"
| "Nykl";
type de_QuranTextNames = 
| "Abu Rida"
| "Bubenheim & Elyas"
| "Khoury"
| "Zaidan";
type dv_QuranTextNames = 
| "ދިވެހި";
type en_QuranTextNames = 
| "Ahmed Ali"
| "Ahmed Raza Khan"
| "Arberry"
| "Asad"
| "Daryabadi"
| "Hilali & Khan"
| "Pickthall"
| "Qaribullah & Darwish"
| "Saheeh International"
| "Sarwar"
| "Yusuf Ali"
| "Maududi"
| "Shakir"
| "Transliteration"
| "Clear Qur'an - Talal Itani"
| "Mubarakpuri"
| "Qarai"
| "Wahiduddin Khan";

type fa_QuranTextNames = 
| "آیتی"
| "فولادوند"
| "الهی قمشه‌ای"
| "مکارم شیرازی"
| "انصاریان"
| "بهرام پور"
| "خرمشاهی"
| "مجتبوی"
| "خرمدل"
| "معزی"
| "قرائتی"
| "صادقی تهرانی"
| "صفوی";
type fr_QuranTextNames = 
| "Hamidullah";

type ha_QuranTextNames = 
| "Gumi"
type hi_QuranTextNames = 
| "फ़ारूक़ ख़ान & नदवी"
| "फ़ारूक़ ख़ान & अहमद"




/** QuranTextNames */
interface qtnMap {
   "ar":ar_QuranTextNames;
   "az":az_QuranTextNames;
   "bn":bn_QuranTextNames;
   "cs":cs_QuranTextNames;
   "de":de_QuranTextNames;
   "dv":dv_QuranTextNames;
   "en":en_QuranTextNames;
   "fa":fa_QuranTextNames;
   "fr":fr_QuranTextNames;
   "ha":ha_QuranTextNames;
   "hi":hi_QuranTextNames;
   "id":""
   "it":""
   "ja":""
   "ko":""
   "ku":""
   "ml":""
   "nl":""
   "no":""
   "pl":""
   "pt":""
   "ro":""
   "ru":""
   "sd":""
   "so":""
   "sq":""
   "sv":""
   "sw":""
   "ta":""
   "tg":""
   "th":""
   "tr":""
   "tt":""
   "ug":""
   "ur":""
   "uz":""
   "es":""
   "bg":""
   "bs":""
   "ms":""
   "zh":""
   "si":""
   "ba":""
   "my":""
   "am":""
   "ber":""
   "ps":""
   "ce":""
}



export interface QuranTextNamesByLanguage {
   "ar":qtnMap['ar'];
   "az":qtnMap['az'];
   "bn":qtnMap['bn'];
   "cs":qtnMap['cs'];
   "de":qtnMap['de'];
   "dv":qtnMap['dv'];
   "en":qtnMap['en'];
   "fa":qtnMap['fa'];
   "fr":qtnMap['fr'];
   "ha":qtnMap['ha'];
   "hi":qtnMap['hi'];
   "id":qtnMap['id'];
   "it":qtnMap['it'];
   "ja":qtnMap['ja'];
   "ko":qtnMap['ko'];
   "ku":qtnMap['ku'];
   "ml":qtnMap['ml'];
   "nl":qtnMap['nl'];
   "no":qtnMap['no'];
   "pl":qtnMap['pl'];
   "pt":qtnMap['pt'];
   "ro":qtnMap['ro'];
   "ru":qtnMap['ru'];
   "sd":qtnMap['sd'];
   "so":qtnMap['so'];
   "sq":qtnMap['sq'];
   "sv":qtnMap['sv'];
   "sw":qtnMap['sw'];
   "ta":qtnMap['ta'];
   "tg":qtnMap['tg'];
   "th":qtnMap['th'];
   "tr":qtnMap['tr'];
   "tt":qtnMap['tt'];
   "ug":qtnMap['ug'];
   "ur":qtnMap['ur'];
   "uz":qtnMap['uz'];
   "es":qtnMap['es'];
   "bg":qtnMap['bg'];
   "bs":qtnMap['bs'];
   "ms":qtnMap['ms'];
   "zh":qtnMap['zh'];
   "si":qtnMap['si'];
   "ba":qtnMap['ba'];
   "my":qtnMap['my'];
   "am":qtnMap['am'];
   "ber":qtnMap['ber'];
   "ps":qtnMap['ps'];
   "ce":qtnMap['ce'];
}