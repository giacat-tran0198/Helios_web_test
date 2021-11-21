const options = { year: "numeric", month: "long", day: "numeric" };
const opt_weekday = { weekday: "long" };

const toTitleCase = (str) =>
  str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

export const convertDateToString = (dateInput) => {
  let date = new Date(dateInput);
  return (
    toTitleCase(date.toLocaleDateString("fr-FR", opt_weekday)) +
    ", " +
    date.toLocaleDateString("fr-FR", options)
  );
};
