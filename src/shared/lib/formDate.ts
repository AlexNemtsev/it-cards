export const formatDate = (date: string) => {
  return !date ? '' : new Date(date).toLocaleDateString('ru-RU');
};
