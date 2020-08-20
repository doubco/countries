# Countries 🏳

Countries is basically a data package (with some helpers) for easy access to country, locale, language, currency and time zone data.

## Installation

```
yarn add @doubco/countries
```

## Usage

> ⚠️ GraphQL versions' has matching object `key` and list `_id` with type definations.

### Countries

#### Data Structure

##### `countries` example

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
    "nativeName": "Türkiye"
  },
  ...
}
```

##### `countryList` example

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

#### Import Statements

```js
import { countries, countryList } from "@doubco/countries";

// or

import countries from "@doubco/countries";

// default
// countries.data
// countries.list

// graphql alt.
// countries.graphql.data
// countries.graphql.list
```

---

### Locales

#### Data Structure

##### `locales` example

```json
{
  ...,
  "en_GB": "English - Great Britain",
  ...
}
```

##### `localeList` example

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

#### Import Statements

```js
import { locales, localeList } from "@doubco/countries/locales";

// or

import locales from "@doubco/countries/locales";

// default
// locales.data
// locales.list

// graphql alt.
// locales.graphql.data
// locales.graphql.list
```

---

### Languages

#### Data Structure

##### `languages` example

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

##### `languageList` example

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

#### Import Statements

```js
import { languages, languageList } from "@doubco/countries/languages";

// or

import languages from "@doubco/countries/languages";

// default
// languages.data
// languages.list

// graphql alt.
// languages.graphql.data
// languages.graphql.list
```

---

### Currencies

#### Data Structure

##### `currencies` example

```json
{
  ...,
  "TRY": {
    "symbol": "TRY",
    "nativeSymbol": "\u20BA",
    "decimalDigits": 2,
    "name": "Turkish Lira",
    "nativeName": "Türk Lirası",
    "namePlural": "Turkish Lira"
  },
  ...
}
```

> ⚠️ nativeName is only available on some currencies.

##### `currencyList` example

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

##### `currencyListLite` example

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

#### Import Statements

```js
import {
  currencies,
  currencyList,
  currencyListSimple,
  currenciesLite,
  currencyListLite,
  currencyListLiteSimple,
} from "@doubco/countries/currencies";

import currencies from "@doubco/countries/currencies";

// default
// currencies.data;
// currencies.list;
// currencies.simpleList;

// lite
// currencies.lite.data;
// currencies.lite.list;
// currencies.lite.simpleList;

// graphql alt.
// currencies.graphql.data;
// currencies.graphql.list;
// currencies.graphql.simpleList;
// currencies.graphql.lite.data;
// currencies.graphql.lite.list;
// currencies.graphql.lite.simpleList;
```

> Simple list versions' uses `key` as `label`.

> Lite versions' includes only currencies supported by most currency convertion APIs.

---

### Timezones

#### Data Structure

##### `timezones` example

```json
{
  ...,
  "TRY": {
    "symbol": "TRY",
    "nativeSymbol": "\u20BA",
    "decimalDigits": 2,
    "name": "Turkish Lira",
    "nativeName": "Türk Lirası",
    "namePlural": "Turkish Lira"
  },
  ...
}
```

##### `timezoneList` example

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

#### Import Statements

```js
import { timezones, timezoneList } from "@doubco/countries/timezones";

// or

import timezones from "@doubco/countries/timezones";

// default
// timezones.data
// timezones.list

// lite
// timezones.lite.data
// timezones.lite.list

// graphql alt.
// timezones.graphql.data
// timezones.graphql.list
// timezones.graphql.lite.data
// timezones.graphql.lite.list
```

> Lite versions only includes one time zone once.

---

## Usage with GraphQL

This library also exposes GraphQL resolvers and type definations.

#### `es6`

```js
import Countries from "@doubco/countries/graphql";

export default {
  typeDefs: [
    Countries.typeDefs,
    Auth.typeDefs,
    User.typeDefs,
    Log.typeDefs,
  ...
  ],
  resolvers: merge(
    Countries.resolvers,
    Auth.resolvers,
    User.resolvers,
    ...
  ),
};
```

#### `nodejs`

```js
const  = require("@doubco/countries/graphql");

module.exports = {
  typeDefs: [
    Countries.typeDefs, // this is it.
    Auth.typeDefs,
    User.typeDefs,
    Log.typeDefs,
  ...
  ],
  resolvers: merge(
    Countries.resolvers, // this is it.
    Auth.resolvers,
    User.resolvers,
    ...
  ),
};
```

> This usage is for Apollo Server, you can use similar approach on other frameworks.

---

## Contribute

Pull requests are welcome and please submit bugs 🐛.

## Contact

- Follow [@doubco](https://twitter.com/doubco) on Twitter
- Follow [@doubco](http://instagram.com/doubco) on Instagram
- Email <mailto:hi@doub.co>
