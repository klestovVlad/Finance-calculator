export const getCurrentDate = () => {
  const yearAndMonth = new Date().toISOString().split('T')[0].slice(0, 7);
  const yearAndMonthAndDay = new Date().toISOString().split('T')[0];

  return {yearAndMonth, yearAndMonthAndDay};
};
