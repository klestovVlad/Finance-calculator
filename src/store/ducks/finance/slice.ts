import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type FinanceStateType = {
  spending: number;
  income: number;
};

const initialState: FinanceStateType = {
  spending: 0,
  income: 0,
};

const financeSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addSpending: (state, {payload}: PayloadAction<number>) => {
      state.spending += payload;
    },
    addIncome: (state, {payload}: PayloadAction<number>) => {
      state.income += payload;
    },
  },
});

export const actions = {
  ...financeSlice.actions,
};
export const reducer = financeSlice.reducer;
