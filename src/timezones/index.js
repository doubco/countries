import data from "./data.json";

export const timezones = data;

export const timezonesStructured = timezones.map((key) => {
  return {
    _id: key,
    label: timezones[key],
  };
});
