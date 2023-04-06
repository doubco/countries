import data from "./data.json";
import { IListItem, TRegionNode } from "../../../types";

export const regions: TRegionNode[] = data;

export const regionList: IListItem[] = regions.map((region, idx): IListItem => {
  return {
    _id: `${region.shortCode || `SC0${idx}`}`,
    label: `${region.name}`,
  };
});

const convertKey = (key: string): string => key.toUpperCase();

const exportDataAsGraphQLEnum = (data: IListItem[]) => {
  let x: any = {};
  data.forEach((key) => {
    x[convertKey(key._id)] = `${key._id}`;
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
  data: regions,
  list: regionList,
  graphql: {
    data: exportDataAsGraphQLEnum(regionList),
    list: exportListAsGraphQLEnum(regionList),
  },
};
