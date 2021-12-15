import { IListItem, TimezoneCode, Timezones } from "../types";

import data from "./data.json";

const source: Timezones = data;

let lite: any = {};

const liteSource: TimezoneCode[] = [
  TimezoneCode.PACIFIC__PAGO_PAGO,
  TimezoneCode.PACIFIC__HONOLULU,
  TimezoneCode.PACIFIC__TAHITI,
  TimezoneCode.AMERICA__ANCHORAGE,
  TimezoneCode.AMERICA__LOS_ANGELES,
  TimezoneCode.AMERICA__DENVER,
  TimezoneCode.AMERICA__CHICAGO,
  TimezoneCode.AMERICA__NEW_YORK,
  TimezoneCode.AMERICA__HALIFAX,
  TimezoneCode.AMERICA__ARGENTINA,
  TimezoneCode.AMERICA__SAO_PAULO,
  TimezoneCode.ATLANTIC__AZORES,
  TimezoneCode.EUROPE__LONDON,
  TimezoneCode.EUROPE__BERLIN,
  TimezoneCode.EUROPE__HELSINKI,
  TimezoneCode.EUROPE__ISTANBUL,
  TimezoneCode.ASIA__DUBAI,
  TimezoneCode.ASIA__KABUL,
  TimezoneCode.INDIAN__MALDIVES,
  TimezoneCode.ASIA__KATHMANDU,
  TimezoneCode.ASIA__DHAKA,
  TimezoneCode.INDIAN__COCOS,
  TimezoneCode.ASIA__BANGKOK,
  TimezoneCode.ASIA__HONG_KONG,
  TimezoneCode.ASIA__PYONGYANG,
  TimezoneCode.ASIA__TOKYO,
  TimezoneCode.AUSTRALIA__DARWIN,
  TimezoneCode.AUSTRALIA__BRISBANE,
  TimezoneCode.AUSTRALIA__ADELAIDE,
  TimezoneCode.AUSTRALIA__SYDNEY,
  TimezoneCode.PACIFIC__NAURU,
  TimezoneCode.PACIFIC__AUCKLAND,
  TimezoneCode.PACIFIC__KIRITIMATI,
];

liteSource.forEach((i: TimezoneCode) => (lite[i] = source[i]));

export const timezones: Timezones = source;
export const timezonesLite: Timezones = lite;

export const timezoneList: IListItem[] = Object.keys(timezones).map(
  (key: TimezoneCode) => {
    return {
      _id: key,
      label: timezones[key],
    };
  },
);

export const timezoneListLite: IListItem[] = Object.keys(timezonesLite).map(
  (key: TimezoneCode) => {
    return {
      _id: key,
      label: timezonesLite[key],
    };
  },
);

const convertKey = (key: string): string =>
  key.toUpperCase().replace("/", "__");

const exportDataAsGraphQLEnum = (data: Timezones) => {
  let x: any = {};
  Object.keys(data).forEach((key: TimezoneCode) => {
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

export default {
  data: timezones,
  list: timezoneList,
  lite: {
    data: timezonesLite,
    list: timezoneListLite,
  },
  graphql: {
    data: exportDataAsGraphQLEnum(timezones),
    list: exportListAsGraphQLEnum(timezoneList),
    lite: {
      data: exportDataAsGraphQLEnum(timezonesLite),
      list: exportListAsGraphQLEnum(timezoneListLite),
    },
  },
};
