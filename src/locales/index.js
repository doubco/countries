import data from "./data.json";

export const locales = data;

export const localesStructured = locales.map((key) => {
  return {
    _id: key,
    label: locales[key],
  };
});
