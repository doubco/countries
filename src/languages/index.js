import data from "./data";

export const languages = data;

export const languagesStructured = Object.keys(languages).map((key) => {
  let l = languages[key];
  return {
    _id: key,
    label: `${l.name} (${l.nativeName})`,
  };
});
