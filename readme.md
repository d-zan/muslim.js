# Muslim.js

Muslim.js is a Node.js package that provides a comprehensive wrapper for the Aladhan API v1, giving you easy access to prayer times, Hijri calendars, and other Islamic data for your Node.js applications.

## Installation

You can install the package using npm:

```bash
npm install muslim.js
```

## Features

- Get prayer times for any city in the world (they are more way to get that).
- Get the next prayer time.
- Get information about the Hijri calendar, including holidays and special days.
- Get the 99 names of Allah.
- Get Quranic text in various editions.

## Usage

### Prayer Times

To get prayer times, you need to create a new `Prayer` object with the city, country, and calculation method.

```javascript
const { Prayer } = require('muslim.js');

const egPrayer = new Prayer('Cairo', 'EG', 'Egyptian General Authority of Survey');

// Get all prayer times
egPrayer.getAllPrayTime().then(console.log);

// Get the next prayer time
egPrayer.getNextPrayTime().then(console.log);
```

### Hijri Calendar

To get information about the Hijri calendar, you can use the `Hijri` class.

```javascript
const { Hijri } = require('muslim.js');

const hijri = new Hijri();

// Get the next upcoming holiday
hijri.getNextHijriHoliday().then(console.log);

// Get the current Islamic year
hijri.getYear().then(console.log);

// Get the current Islamic month
hijri.getMonth().then(console.log);
```

### Asma Allah Husna

To get the 99 names of Allah, you can use the `AsmaAllahHusna` class.

```javascript
const { AsmaAllahHusna } = require('muslim.js');

const asma = new AsmaAllahHusna();

// Get all names
const allNames = asma.all();
console.log(allNames);

// Get a name by number
const nameByNumber = asma.byNumber(1);
console.log(nameByNumber);

// Get a name by Arabic name
const nameByArabicName = asma.byArabicName('الرحمن');
console.log(nameByArabicName);
```

### Quran Text (Beta)
To get Quran text, you can use the `QuranText` class
```javascript
const { QuranText } = require('muslim.js');

const quran = new QuranText('en', 'Sahih International');

// Get information about the Quran edition
quran.editionInfo().then(console.log);

// Get a specific surah
quran.surah(1).then(console.log);

// Get a specific juz
quran.juz(1).then(console.log);

// Get the full text of the Quran
quran.full().then(console.log);
```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
