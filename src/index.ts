import data from "./data.json";
import { CountryCode, Countries } from "./types";

export * from "./types";

export const countries: Countries = data;

export const countryList = Object.keys(countries).map((key: CountryCode) => {
  let l = countries[key];
  return {
    _id: key,
    label: `${l.name}`,
  };
});

export default {
  data: countries,
  list: countryList,
  graphql: {
    data: countries,
    list: countryList,
  },
};
