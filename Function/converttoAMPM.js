function Time(timings) {
  let [hours, minutes] = timings.split(":").map(Number);
  let period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
}
/** @private */
function converttoAMPM(data) {
  if (!data) return;
  
  return {
    fajr: Time(data.Fajr),
    sunrise: Time(data.Sunrise),
    dhuhr: Time(data.Dhuhr),
    asr: Time(data.Asr),
    maghrib: Time(data.Maghrib),
    isha: Time(data.Isha),
    imsak: Time(data.Imsak),
    midnight: Time(data.Midnight),
    firstthird: Time(data.Firstthird),
    lastthird: Time(data.Lastthird),
  };
}
/** @private */
function convertOneToAMPM(data) {
  if (!data) return;

  return Time(data);
}
module.exports = { converttoAMPM, convertOneToAMPM };
