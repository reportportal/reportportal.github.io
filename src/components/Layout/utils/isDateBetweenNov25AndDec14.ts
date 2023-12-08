export const isDateBetweenNov25AndDec14 = (): boolean => {
  // Get current date
  const currentDate = new Date();

  // Set the time zone to GMT+3
  currentDate.setUTCHours(currentDate.getUTCHours() + 3);

  const startDate = new Date(currentDate.getUTCFullYear(), 10, 25);
  const endDate = new Date(currentDate.getUTCFullYear(), 11, 14);

  return currentDate >= startDate && currentDate <= endDate;
};
