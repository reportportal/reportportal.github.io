export const isDateBetweenNov25AndJan15 = () => {
  const GMT3 = 3;
  const currentDate = new Date();

  currentDate.setUTCHours(currentDate.getUTCHours() + GMT3);

  const isNovemberOrLater = currentDate.getUTCMonth() >= 10;
  const startDate = new Date(Date.UTC(currentDate.getUTCFullYear(), 10, 25, GMT3, 0, 0));
  const endDate = new Date(Date.UTC(currentDate.getUTCFullYear(), 0, 15, GMT3, 0, 0));

  const result = isNovemberOrLater ? currentDate >= startDate : currentDate <= endDate;

  console.info({ isDateBetweenNov25AndJan15: result });

  return result;
};
