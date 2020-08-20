# Countries 🏳

Countries is basically a data package (with some helpers) for easy access to country, locale, language, currency and time zone data.

## Installation

```
yarn add @doubco/countries
```

## Usage

### Get country data

#### `data`

##### Raw

```json
{
  ...,
  "TR": {
    "name": "Turkey",
    "flag": "🇹🇷",
    "code": "+90",
    "currency": "TRY",
    "capital": "Ankara",
    "languages": ["tr"],
    "nameNative": "Türkiye"
  },
  ...
}
```

##### List

```json
[
  ...
  {
    "_id": "TR",
    "label": "Turkey (Türkiye)"
  },
  ...
]
```

#### `es6`

```js
import { countries, countryList } from "@doubco/countries";
```

#### `nodejs`

```js
const { countries, countryList } = require("@doubco/countries");
```

### Get locale data

#### `data`

##### Raw

```json
{
  ...,
  "en_GB": "English - Great Britain",
  ...
}
```

##### List

```json
[
  ...
  {
    "_id": "en_GB",
    "label": "English - Great Britain"
  },
  ...
]
```

#### `es6`

```js
import { locales, localeList } from "@doubco/countries/locales";
```

#### `nodejs`

```js
const { locales, localeList } = require("@doubco/countries/locales");
```

### Get language data

#### `data`

##### Raw

```json
{
  ...,
  "tr": {
    "name": "Turkish",
    "nativeName": "Türkçe"
  },
  ...
}
```

##### List

```json
[
  ...
  {
    "_id": "tr",
    "label": "Turkish (Türkçe)"
  },
  ...
]
```

#### `es6`

```js
import { languages, languageList } from "@doubco/countries/languages";
```

#### `nodejs`

```js
const { languages, languageList } = require("@doubco/countries/languages");
```

### Get currency data

#### `data`

##### Raw

```json
{
  ...,
  "TRY":{
    "name":"Turkish Lira",
    "nativeName":"Türk Lirası",
    "symbol":"₺"
  }
  ...
}
```

##### List

```json
[
  ...
  {
    "_id": "TRY",
    "label": "Turkish Lira (₺)",
  },
  ...
]
```

##### List Lite

```json
[
  ...
  {
    "_id": "TRY",
    "label": "TRY",
  },
  ...
]
```

#### `es6`

```js
import {
  currencies,
  currenciesSafe,
  currencyList,
  currenciesListLite,
  currenciesListSafe,
  currenciesListLiteSafe,
} from "@doubco/countries/currencies";
```

> `XXXSafe` includes only currencies supported by most currency convertion APIs.

#### `nodejs`

```js
const {
  currencies,
  currenciesSafe,
  currencyList,
  currenciesListLite,
  currenciesListSafe,
  currenciesListLiteSafe,
} = require("@doubco/countries/currencies");
```

### Get timezone data

#### `es6`

```js
import { timezones, timezoneList } from "@doubco/countries/timezones";
```

#### `nodejs`

```js
const { timezones, timezoneList } = require("@doubco/countries/timezones");
```

---

## Contribute

Pull requests are welcome and please submit bugs 🐛.

## Contact

- Follow [@doubco](https://twitter.com/doubco) on Twitter
- Follow [@doubco](http://instagram.com/doubco) on Instagram
- Email <mailto:hi@doub.co>
