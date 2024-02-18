export const getCurrentMonthName = (isCapital?: boolean) => {
  const date = new Date();
  const month = date.toLocaleString('default', {month: 'long'});
  return isCapital ? month : month.charAt(0).toLowerCase() + month.slice(1);
};
