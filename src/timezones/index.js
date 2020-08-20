import data from "./data.json";

export const timezones = data;

export const timezonesList = timezones.map((key) => {
  return {
    _id: key,
    label: timezones[key],
  };
});
