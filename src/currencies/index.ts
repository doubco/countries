import { Currencies, CurrencyCode, IListItem } from "../types";
import data from "./data.json";
// Default

export const currencies: Currencies = data;

export const currencyList: IListItem[] = Object.keys(currencies).map(
  (key: CurrencyCode) => {
    let c = currencies[key];
    return {
      _id: key,
      label: `${c.name} (${c.nativeSymbol})`,
    };
  },
);

export const currencyListSimple: IListItem[] = Object.keys(currencies).map(
  (key: CurrencyCode) => {
    let c = currencies[key];
    return {
      _id: key,
      label: key,
    };
  },
);

// Lite

const liteSource = [
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTC",
  "BTN",
  "BWP",
  "BYN",
  "BYR",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "IMP",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JEP",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KMF",
  "KPW",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LTL",
  "LVL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRO",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLL",
  "SOS",
  "SRD",
  "STD",
  "SVC",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "UYU",
  "UZS",
  "VEF",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XAG",
  "XAU",
  "XCD",
  "XDR",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMK",
  "ZMW",
  "ZWL",
];

let lite: any = {};

liteSource.forEach((key: CurrencyCode) => {
  lite[key] = currencies[key];
});

export const currenciesLite: Currencies = lite;

export const currencyListLite: IListItem[] = Object.keys(currencies)
  .filter((key) => liteSource.includes(key))
  .map((key: CurrencyCode) => {
    let c = currencies[key];
    return {
      _id: key,
      label: `${c.name} (${c.nativeSymbol})`,
    };
  });

export const currencyListLiteSimple: IListItem[] = Object.keys(currencies)
  .filter((key) => liteSource.includes(key))
  .map((key: CurrencyCode) => {
    let c = currencies[key];
    return {
      _id: key,
      label: key,
    };
  });

export default {
  data: currencies,
  list: currencyList,
  simpleList: currencyListSimple,
  lite: {
    data: currenciesLite,
    list: currencyListLite,
    simpleList: currencyListSimple,
  },
  graphql: {
    data: currencies,
    list: currencyList,
    simpleList: currencyListSimple,
    lite: {
      data: currenciesLite,
      list: currencyListLite,
      simpleList: currencyListSimple,
    },
  },
};
