import data from "./data.json";
import { ECountry, TCountries } from "./types";

export * from "./types";

export const countries: TCountries = data;

export const countryList = Object.keys(countries).map((key: ECountry) => {
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
