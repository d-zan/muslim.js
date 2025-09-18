//const { converttoAMPM } = require('./JS/JS');

const Prayer = require('./Class/prayer');
const converttoAMPM = require('./Function/converttoAMPM');
const axios  = require("axios");
const getMethodNumber = require('./Function/getMethodNumber');
const Hijri = require('./Class/Hijri');
const MethodName = require('./JS/MethodName');
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
     const axi = await axios.get('https://api.aladhan.com/v1/methods');
        //const method = await axi.data.data['EGYPT'].id;
    const prayer = new Prayer('Cairo','EG','Egyptian General Authority of Survey')
    /*
    const name = MethodName[5];
        const method = await axi.data.data[name];
        const latitude = await method.location.latitude;
        const longitude = await method.location.longitude;
        const api = `https://api.aladhan.com/v1/nextPrayer/26-03-2025?latitude=${latitude}&longitude=${longitude}`;
        const ax = await axios.get(api);
        */

    console.log((await prayer.getNextPrayTime()))
}
name()