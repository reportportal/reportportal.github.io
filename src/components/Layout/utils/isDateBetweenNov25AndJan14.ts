export const isDateBetweenNov25AndJan14 = (): boolean => {
  const currentDate = new Date();

  currentDate.setUTCHours(currentDate.getUTCHours() + 3);

  const startDate = new Date(currentDate.getUTCFullYear(), 10, 25, 0, 0, 0);

  startDate.setUTCHours(startDate.getUTCHours() + 3);

  const endDate = new Date(currentDate.getUTCFullYear() + 1, 0, 14, 23, 59, 59);

  endDate.setUTCHours(endDate.getUTCHours() + 3);

  return currentDate >= startDate && currentDate <= endDate;
};
