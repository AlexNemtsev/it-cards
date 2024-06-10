export const isDateValid = (date?: string) => {
  const parsedDate = date ? Date.parse(date) : false;

  return !Number.isNaN(parsedDate);
};
