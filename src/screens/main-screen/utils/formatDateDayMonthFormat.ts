export const formatDateDayMonthFormat = (
  dateString: string | number,
): string => {
  const dateObj = new Date(dateString);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (isSameDay(dateObj, today)) {
    return 'today';
  } else if (isSameDay(dateObj, yesterday)) {
    return 'yesterday';
  } else {
    const options: Intl.DateTimeFormatOptions = {day: 'numeric', month: 'long'};
    return dateObj.toLocaleDateString('en-US', options);
  }
};

function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}
