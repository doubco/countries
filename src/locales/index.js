import data from "./data.json";

export const locales = data;

export const localesList = locales.map((key) => {
  return {
    _id: key,
    label: locales[key],
  };
});
