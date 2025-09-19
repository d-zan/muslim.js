//const { converttoAMPM } = require('./JS/JS');
const AsmaAllahHusna = require('./Class/asmaAllahHusna');
const Hijri = require('./Class/Hijri');
/*
const Prayer = require('./Class/prayer');
const converttoAMPM = require('./Function/converttoAMPM');
//const axios  = require("axios");
const getMethodNumber = require('./Function/getMethodNumber');
const MethodName = require('./JS/MethodName');*/
//const fetch = require('node-fetch');
/*const { API_URL } = require('./JSON/bot.json');
async function name() {
    if (!ax) return console.log("A7A")
    const time2 = ax.data.data.timings;
    if (!time2) return console.log("A7A")
console.log(converttoAMPM(time2),ax.data.data)

//time.forEach((p,c)=>console.log(p+':'+c))
const now = new Date();

; 
}*/
async function name() {
    //const egPrayer = new Prayer('Cairo','EG','Egyptian General Authority of Survey');
   //const data = await egPrayer.getAllPrayTime();
  // const ax = await axios.get('https://api.aladhan.com/v1/gToHCalendar/2/2025');
 //ax.data
    ///console.log(ax.data.data);    
     //const res = await fetch('https://api.aladhan.com/v1/islamicMonths');
        //const method = await axi.data.data['EGYPT'].id;
    //const prayer = new Prayer('Cairo','EG','Egyptian General Authority of Survey')
  const hijri = new Hijri();
  const data1 = await hijri.islamicMonths.all();
  const data2 = await hijri.islamicMonths.get(1)
  // 1977-4-25  
  /*
    const name = MethodName[5];
        const method = await axi.data.data[name];
        const latitude = await method.location.latitude;
        const longitude = await method.location.longitude;
        const api = `https://api.aladhan.com/v1/nextPrayer/26-03-2025?latitude=${latitude}&longitude=${longitude}`;
        const ax = await axios.get(api);
        */
    //const now = new Date();
    //const h = `${now.getUTCDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;
    //console.log((await prayer.getNextPrayTime()))
    //const json = await res.json()
   // const c = await json.data//.map(e=>e.gregorian)
///console.log(await data1);
   console.log(await data2);
    /**
    
    {
  hijri: {
    date: '03-06-1447',
    format: 'DD-MM-YYYY',
    day: '3',
    weekday: { en: 'Al Athnayn', ar: 'الاثنين' },
    month: {
      number: 6,
      en: 'Jumādá al-ākhirah',
      ar: 'جُمادى الآخرة',
      days: 29
    },
    year: '1447',
    designation: { abbreviated: 'AH', expanded: 'Anno Hegirae' },
    holidays: [ 'Urs of Mawlānā Shaykh Hishām Kabbāni (ق' ],
    adjustedHolidays: [],
    method: 'HJCoSA'
  },
  gregorian: {
    date: '24-11-2025',
    format: 'DD-MM-YYYY',
    day: '24',
    weekday: { en: 'Monday' },
    month: { number: 11, en: 'November' },
    year: '2025',
    designation: { abbreviated: 'AD', expanded: 'Anno Domini' },
    lunarSighting: false
  }
}

    */
}
name()