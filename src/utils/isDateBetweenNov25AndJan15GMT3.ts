export const isDateBetweenNov25AndJan15GMT3 = () => {
  const currentDate = new Date();

  const isNovemberOrLater = currentDate.getUTCMonth() >= 10;
  const startDate = new Date(Date.UTC(currentDate.getUTCFullYear(), 10, 24, 21, 0, 0));
  const endDate = new Date(Date.UTC(currentDate.getUTCFullYear(), 0, 4, 21, 0, 0));

  const result = isNovemberOrLater ? currentDate >= startDate : currentDate <= endDate;

  console.info({ isDateBetweenNov25AndJan15GMT3: result });

  return result;
};
