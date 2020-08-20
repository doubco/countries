import data from "./data";

export const countries = data;

export const countriesStructured = Object.keys(countries).map((key) => {
  let l = countries[key];
  return {
    _id: key,
    label: `${l.name}`,
  };
});
