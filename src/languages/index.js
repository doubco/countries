import data from "./data";

export const languages = data;

export const languageList = Object.keys(languages).map((key) => {
  let l = languages[key];
  return {
    _id: key,
    label: `${l.name} (${l.nativeName})`,
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
  data: languages,
  list: languageList,
  graphql: {
    data: exportDataAsGraphQLEnum(languages),
    list: exportListAsGraphQLEnum(languageList),
  },
};
