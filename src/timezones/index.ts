import { IListItem, ETimezone, TTimezones } from "../types";

import data from "./data.json";

const source: TTimezones = data;

let lite: any = {};

let keys: any = {};

const liteSource: ETimezone[] = [
  ETimezone.PACIFIC__PAGO_PAGO,
  ETimezone.PACIFIC__HONOLULU,
  ETimezone.PACIFIC__TAHITI,
  ETimezone.AMERICA__ANCHORAGE,
  ETimezone.AMERICA__LOS_ANGELES,
  ETimezone.AMERICA__DENVER,
  ETimezone.AMERICA__CHICAGO,
  ETimezone.AMERICA__NEW_YORK,
  ETimezone.AMERICA__HALIFAX,
  ETimezone.AMERICA__ARGENTINA,
  ETimezone.AMERICA__SAO_PAULO,
  ETimezone.ATLANTIC__AZORES,
  ETimezone.EUROPE__LONDON,
  ETimezone.EUROPE__BERLIN,
  ETimezone.EUROPE__HELSINKI,
  ETimezone.EUROPE__ISTANBUL,
  ETimezone.ASIA__DUBAI,
  ETimezone.ASIA__KABUL,
  ETimezone.INDIAN__MALDIVES,
  ETimezone.ASIA__KATHMANDU,
  ETimezone.ASIA__DHAKA,
  ETimezone.INDIAN__COCOS,
  ETimezone.ASIA__BANGKOK,
  ETimezone.ASIA__HONG_KONG,
  ETimezone.ASIA__PYONGYANG,
  ETimezone.ASIA__TOKYO,
  ETimezone.AUSTRALIA__DARWIN,
  ETimezone.AUSTRALIA__BRISBANE,
  ETimezone.AUSTRALIA__ADELAIDE,
  ETimezone.AUSTRALIA__SYDNEY,
  ETimezone.PACIFIC__NAURU,
  ETimezone.PACIFIC__AUCKLAND,
  ETimezone.PACIFIC__KIRITIMATI,
];

liteSource.forEach((i: ETimezone) => (lite[i] = source[i]));

export const timezones: TTimezones = source;
export const timezonesLite: TTimezones = lite;

export const timezoneList: IListItem[] = Object.keys(timezones).map(
  (key: ETimezone) => {
    return {
      _id: key,
      label: timezones[key],
    };
  },
);

export const timezoneListLite: IListItem[] = Object.keys(timezonesLite).map(
  (key: ETimezone) => {
    return {
      _id: key,
      label: timezonesLite[key],
    };
  },
);

const convertKey = (key: string): string =>
  key.toUpperCase().replace("/", "__");

const exportDataAsGraphQLEnum = (data: TTimezones) => {
  let x: any = {};
  Object.keys(data).forEach((key: ETimezone) => {
    x[convertKey(key)] = data[key];
  });
  return x;
};
const exportListAsGraphQLEnum = (list: IListItem[]) => {
  return list.map((i: IListItem) => ({
    _id: convertKey(i._id),
    label: i.label,
  }));
};

Object.keys(data).forEach((key: ETimezone) => {
  keys[convertKey(key)] = key;
});

export default {
  data: timezones,
  list: timezoneList,
  lite: {
    data: timezonesLite,
    list: timezoneListLite,
  },
  graphql: {
    keys,
    data: exportDataAsGraphQLEnum(timezones),
    list: exportListAsGraphQLEnum(timezoneList),
    lite: {
      data: exportDataAsGraphQLEnum(timezonesLite),
      list: exportListAsGraphQLEnum(timezoneListLite),
    },
  },
};
