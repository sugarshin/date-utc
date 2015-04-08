# date-utc

[![Build Status](https://travis-ci.org/sugarshin/date-utc.svg?branch=master)](https://travis-ci.org/sugarshin/date-utc) [![GitHub version](https://badge.fury.io/gh/sugarshin%2Fdate-utc.svg)](http://badge.fury.io/gh/sugarshin%2Fdate-utc) [![License](http://img.shields.io/:license-mit-blue.svg)](http://sugarshin.mit-license.org/)

wrapper library for utc methods

**WIP**

```
npm i date-utc
```

## Usage

```js
var DateUTC = require('date-utc');

var date = new Date(2016, 2, 9, 10);
var dateUtc = new DateUTC(2016, 2, 9, 10);

date.getHours(); // => 10
dateUtc.getHours(); // => 1
```

## Contributing

**WIP**

**Incomplete test**

```
npm test
```

## License

[MIT](http://sugarshin.mit-license.org/)

© sugarshin
