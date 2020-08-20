import data from "./data.json";

export const locales = data;

export const localeList = locales.map((key) => {
  return {
    _id: key,
    label: locales[key],
  };
});

const convertKey = (key) => key.toUpperCase();

const exportDataAsGraphQLEnum = (data) => {
  let x = {};
  Object.keys(data).forEach((key) => {
    x[convertKey(key)] = data[key];
  });
  return x;
};
const exportListAsGraphQLEnum = (list) => {
  return list.map((i) => ({
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
