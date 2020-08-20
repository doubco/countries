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

export default {
  data: timezones,
  list: timezoneList,
  lite: {
    data: timezonesLite,
    list: timezoneListLite,
  },
};
