import { IListItem, ELocale, TLocales } from "../types";
import data from "./data.json";

export const locales: TLocales = data;

export const localeList: IListItem[] = Object.keys(locales).map(
  (key: ELocale) => {
    return {
      _id: key,
      label: locales[key],
    };
  },
);

const convertKey = (key: string): string => key.toUpperCase();

const exportDataAsGraphQLEnum = (data: any) => {
  let x: any = {};
  Object.keys(data).forEach((key) => {
    x[convertKey(key)] = data[key];
  });
  return x;
};
const exportListAsGraphQLEnum = (list: IListItem[]) => {
  return list.map((i: IListItem) => ({
    _id: convertKey(i._id),
    label: i.label,
  }));
};

export default {
  data: locales,
  list: localeList,
  graphql: {
    data: exportDataAsGraphQLEnum(locales),
    list: exportListAsGraphQLEnum(localeList),
  },
};
