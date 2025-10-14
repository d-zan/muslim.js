const islamic = require(".");
//OR
const { AsmaAllahHusna } = require(".");

const asma = new islamic.AsmaAllahHusna();
//OR
//const asma = new AsmaAllahHusna();
//Get a specific name by its number.
function test(number) {
asma.byNumber(number).then(res => console.log(res));
}
/**
{
  name: 'الرَّحْمَنُ',
  transliteration: 'Ar Rahmaan',   
  number: 1,
  en: { meaning: 'The Beneficent' }
}
*/
test(1);
// Get all the names
function test2() {
    asma.all().then(res => console.log(res));
}
/**
[
  {
    name: 'الرَّحْمَنُ',
    transliteration: 'Ar Rahmaan',   
    number: 1,
    en: { meaning: 'The Beneficent' }
  },
  {
    name: 'الرَّحِيمُ',
    transliteration: 'Ar Raheem',
    number: 2,
    en: { meaning: 'The Merciful' }
  },
  .....
  ]
  */
  //test2();
  /** Ar Raheem */
  function test3() {
      return console.log(asma.byArabicName("الرَّحِيمُ").transliteration) 
  }
test3(); //Ar Raheem