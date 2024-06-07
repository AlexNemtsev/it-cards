export const isDateValid = (date?: string) => {
  const isNumber = date ? Date.parse(date) : false;

  return !Number.isNaN(isNumber);
};
