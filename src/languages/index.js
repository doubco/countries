import data from "./data";

export const languages = data;

export const languageList = Object.keys(languages).map((key) => {
  let l = languages[key];
  return {
    _id: key,
    label: `${l.name} (${l.nativeName})`,
  };
});

export default {
  raw: languages,
  list: languageList,
};
