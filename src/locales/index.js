import data from "./data.json";

export const locales = data;

export const localeList = locales.map((key) => {
  return {
    _id: key,
    label: locales[key],
  };
});

export default {
  raw: locales,
  list: localeList,
};
