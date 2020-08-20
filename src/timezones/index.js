import data from "./data.json";

let lite = {};

const liteSource = [
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
  "Asia/Calcutta",
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

liteSource.forEach((i) => (lite[i] = data[i]));

export const timezones = data;
export const timezonesLite = lite;

export const timezoneList = timezones.map((key) => {
  return {
    _id: key,
    label: timezones[key],
  };
});

export const timezoneListLite = timezonesLite.map((key) => {
  return {
    _id: key,
    label: timezonesLite[key],
  };
});

const convertKey = (key) => key.toUpperCase().replace("/", "__");

const exportDataAsGraphQLEnum = (data) => {
  let x = {};
  Object.keys(data).forEach((key) => {
    x[convertKey(key)] = data[key];
  });
  return x;
};
const exportListAsGraphQLEnum = (list) => {
  return list.map((i) => ({
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
