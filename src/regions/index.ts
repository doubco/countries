import data from "./data.json";
import {
  ECountry,
  ERegionCountry,
  IListItem,
  TRegionNode,
  TRegions,
} from "../types";

export const regions: TRegions = Object.keys(data).reduce(
  (acc: any, key: ECountry) => {
    acc[key] = (data as any)[key].map((node: TRegionNode, idx: number) => {
      return {
        name: node.name,
        shortCode: node.shortCode || `SC0${idx}`,
      };
    });
    return acc;
  },
  {},
);

export const regionLists: { [K in ERegionCountry]: IListItem[] } = Object.keys(
  regions,
).reduce((acc: any, key: ERegionCountry) => {
  acc[key] = regions[key].map((node): IListItem => {
    return {
      _id: `${node.shortCode}`,
      label: `${node.name}`,
    };
  });
  return acc;
}, {});

const convertKey = (key: string): string => key.toUpperCase();

const exportDataAsGraphQLEnum = (data: any) => {
  let x: any = {};
  Object.keys(data).forEach((key: ERegionCountry) => {
    x[convertKey(key)] = `${key}`;
  });
  return x;
};

const exportListAsGraphQLEnum = (list: IListItem[]): IListItem[] => {
  return list.map((i: IListItem) => ({
    _id: convertKey(i._id),
    label: i.label,
  }));
};

export default {
  data: regions,
  list: regionLists,
  graphql: {
    data: Object.keys(regionLists).reduce((acc: any, key: ERegionCountry) => {
      acc[key] = exportDataAsGraphQLEnum(
        regions[key]
          .map((node) => node.shortCode)
          .reduce((acc: any, key) => {
            acc[key] = key;
            return acc;
          }, {}),
      );
      return acc;
    }, {}),
    list: Object.keys(regionLists).reduce((acc: any, key: ERegionCountry) => {
      acc[key] = exportListAsGraphQLEnum(regionLists[key]);
      return acc;
    }, {}) as typeof regionLists,
  },
};
