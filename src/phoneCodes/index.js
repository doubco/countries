import data from "./data";

export const phoneCodes = data;

export const phoneCodeList = Object.keys(phoneCodes).map((key) => {
  let i = phoneCodes[key];
  return {
    _id: `${key}${i.code.replace("+", "")}`,
    label: `${i.flag} ${i.code}`,
  };
});

const convertKey = (key) => key.toUpperCase();

const exportDataAsGraphQLEnum = (data) => {
  let x = {};
  Object.keys(data).forEach((key) => {
    x[convertKey(key)] = `${key}`;
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
  data: phoneCodes,
  list: phoneCodeList,
  graphql: {
    data: exportDataAsGraphQLEnum(phoneCodes),
    list: exportListAsGraphQLEnum(phoneCodeList),
  },
};
