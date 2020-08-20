import data from "./data.json";

export const currencies = data;

export const currenciesStructured = currencies.map((key) => {
  return {
    _id: key,
    label: key,
  };
});
