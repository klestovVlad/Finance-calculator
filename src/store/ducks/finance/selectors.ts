import {RootState} from 'src/store';
import {FinanceEntryType} from './types';

export const selectors = {
  selectAllSpending: (state: RootState) => state.finance.entry,
  selectSpendingByMonth: (yearAndMonth: string) => (state: RootState) =>
    state.finance.entry?.[yearAndMonth],
  selectSpendingAmountByMonth: (yearAndMonth: string) => (state: RootState) => {
    const allEntryByDate = state.finance.entry?.[yearAndMonth];

    const income = Object.values(allEntryByDate || {}).reduce((acc, entry) => {
      const incomeByDay = Object.values(entry).reduce((a, c) => {
        return c.entryType === FinanceEntryType.SPENDING ? a + c.amount : a;
      }, 0);

      return acc + incomeByDay;
    }, 0);

    return income;
  },
  selectIncomeByMonth: (yearAndMonth: string) => (state: RootState) => {
    const allEntryByDate = state.finance.entry?.[yearAndMonth];

    const income = Object.values(allEntryByDate || {}).reduce((acc, entry) => {
      const incomeByDay = Object.values(entry).reduce((a, c) => {
        return c.entryType === FinanceEntryType.INCOME ? a + c.amount : a;
      }, 0);

      return acc + incomeByDay;
    }, 0);

    return income;
  },

  selectAllSavings: (state: RootState) => {
    const allEntry = state.finance.entry;
    const allIncome = Object.values(allEntry || {}).reduce((acc, entry) => {
      const incomeByDate = Object.values(entry).reduce((a, c) => {
        return Object.values(c).reduce((a, c) => {
          return c.entryType === FinanceEntryType.INCOME
            ? a + c.amount
            : a - c.amount;
        }, 0);
      }, 0);

      return acc + incomeByDate;
    }, 0);

    return allIncome;
  },
};
