import { TCurrencies, ECurrency, IListItem } from "../types";
import data from "./data.json";

export const currencies: TCurrencies = data;

export const currencyList: IListItem[] = Object.keys(currencies).map(
  (key: ECurrency) => {
    let c = currencies[key];
    return {
      _id: key,
      label: `${c.name} (${c.nativeSymbol})`,
    };
  },
);

export const currencyListSimple: IListItem[] = Object.keys(currencies).map(
  (key: ECurrency) => {
    let c = currencies[key];
    return {
      _id: key,
      label: key,
    };
  },
);

export default {
  data: currencies,
  list: currencyList,
  simpleList: currencyListSimple,
  graphql: {
    data: currencies,
    list: currencyList,
    simpleList: currencyListSimple,
  },
};
