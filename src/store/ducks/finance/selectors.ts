import {RootState} from 'store';

export const selectors = {
  selectSpending: (state: RootState) => state.finance.spending,
  selectIncome: (state: RootState) => state.finance.income,
};
