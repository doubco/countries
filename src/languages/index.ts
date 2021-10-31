import { IListItem, LanguageCode, Languages } from "../types";
import data from "./data.json";

export const languages: Languages = data;

export const languageList: IListItem[] = Object.keys(languages).map(
  (key: LanguageCode) => {
    let l = languages[key];
    return {
      _id: key,
      label: `${l.name} (${l.nativeName})`,
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
  return list.map((i) => ({
    _id: convertKey(i._id),
    label: i.label,
  }));
};

export default {
  data: languages,
  list: languageList,
  graphql: {
    data: exportDataAsGraphQLEnum(languages),
    list: exportListAsGraphQLEnum(languageList),
  },
};
