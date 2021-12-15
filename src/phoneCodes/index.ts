import data from "./data.json";
import { ECountry, IListItem, TPhoneCodes } from "../types";

export const phoneCodes: TPhoneCodes = data;

export const phoneCodeList: IListItem[] = Object.keys(phoneCodes).map(
  (key: ECountry): IListItem => {
    let i = phoneCodes[key];
    return {
      _id: `${key}${i.code.replace("+", "")}`,
      label: `${i.flag} ${i.code}`,
    };
  },
);

const convertKey = (key: string): string => key.toUpperCase();

const exportDataAsGraphQLEnum = (data: any) => {
  let x: any = {};
  Object.keys(data).forEach((key: ECountry) => {
    x[convertKey(key)] = `${key}`;
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
  data: phoneCodes,
  list: phoneCodeList,
  graphql: {
    data: exportDataAsGraphQLEnum(phoneCodes),
    list: exportListAsGraphQLEnum(phoneCodeList),
  },
};
