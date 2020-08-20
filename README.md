# Countries 🏳

Countries is basically a data package (with some helpers) for easy access to country, locale, language, currency and time zone data.

## Installation

```
yarn add @doubco/countries
```

## Usage

### Get country data

#### `data`

##### countries

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

##### countryList

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

##### locales

```json
{
  ...,
  "en_GB": "English - Great Britain",
  ...
}
```

##### localeList

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

##### languages

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

##### languageList

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

##### currencies

```json
{
  ...,
  "TRY": {
    "symbol": "TRY",
    "nativeSymbol": "\u20BA",
    "decimalDigits": 2,
    "name": "Turkish Lira",
    "nameNative": "Türk Lirası",
    "namePlural": "Turkish Lira"
  },
  ...
}
```

##### currencyList

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

##### currencyListLite

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
  currencyList,
  currencyListSimple,
  currenciesLite,
  currencyListLite,
  currencyListLiteSimple,
} from "@doubco/countries/currencies";
```

> `currenciesSafe`, `currencyListSafe`, `currencyListLiteSafe` includes only currencies supported by most currency convertion APIs.

#### `nodejs`

```js
const {
  currencies,
  currencyList,
  currencyListSimple,
  currenciesLite,
  currencyListLite,
  currencyListLiteSimple,
} = require("@doubco/countries/currencies");
```

### Get timezone data

##### timezones

```json
{
  ...,
  "TRY": {
    "symbol": "TRY",
    "nativeSymbol": "\u20BA",
    "decimalDigits": 2,
    "name": "Turkish Lira",
    "nameNative": "Türk Lirası",
    "namePlural": "Turkish Lira"
  },
  ...
}
```

##### timezoneList

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
