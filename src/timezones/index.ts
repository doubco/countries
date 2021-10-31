import { IListItem, TimezoneCode, Timezones } from "../types";

import data from "./data.json";

const source: Timezones = data;

let lite: any = {};

const liteSource: TimezoneCode[] = [
  "Pacific/Pago_Pago",
  "Pacific/Honolulu",
  "Pacific/Tahiti",
  "America/Anchorage",
  "America/Los_Angeles",
  "America/Denver",
  "America/Chicago",
  "America/New_York",
  "America/Halifax",
  "America/Argentina/Buenos_Aires",
  "America/Sao_Paulo",
  "Atlantic/Azores",
  "Europe/London",
  "Europe/Berlin",
  "Europe/Helsinki",
  "Europe/Istanbul",
  "Asia/Dubai",
  "Asia/Kabul",
  "Indian/Maldives",
  "Asia/Kathmandu",
  "Asia/Dhaka",
  "Indian/Cocos",
  "Asia/Bangkok",
  "Asia/Hong_Kong",
  "Asia/Pyongyang",
  "Asia/Tokyo",
  "Australia/Darwin",
  "Australia/Brisbane",
  "Australia/Adelaide",
  "Australia/Sydney",
  "Pacific/Nauru",
  "Pacific/Auckland",
  "Pacific/Kiritimati",
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
