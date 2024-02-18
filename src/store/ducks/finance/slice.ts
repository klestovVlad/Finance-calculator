import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  DeleteEntryPayload,
  EditEntryPayload,
  EntryPayload,
  FinanceEntryType,
  FinanceStateType,
} from './types';
import {v4 as uuidv4} from 'uuid';
import {INCOME_CATEGORY} from 'src/shared/constants/categories';

const initialState: FinanceStateType = {
  entry: {},
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    addEntry: (state, {payload}: PayloadAction<EntryPayload>) => {
      const {yearAndMonth, yearAndMonthAndDay, category, amount, entryType} =
        payload;
      const id = uuidv4();
      const currentEntity = state.entry[yearAndMonth] || {};

      let currentCategory =
        entryType === FinanceEntryType.INCOME
          ? {
              ...category,
              ...INCOME_CATEGORY,
            }
          : category;

      state.entry = {
        ...state.entry,
        [yearAndMonth]: {
          ...currentEntity,
          [yearAndMonthAndDay]: {
            ...currentEntity[yearAndMonthAndDay],
            [id]: {
              amount,
              category: currentCategory,
              entryType,
            },
          },
        },
      };
    },
    deleteSpending: (state, {payload}: PayloadAction<DeleteEntryPayload>) => {
      const {transactionId, yearAndMonth, yearAndMonthAndDay} = payload;
      delete state.entry?.[yearAndMonth]?.[yearAndMonthAndDay]?.[transactionId];
      if (
        Object.keys(state.entry?.[yearAndMonth]?.[yearAndMonthAndDay] || {})
          .length === 0
      ) {
        delete state.entry?.[yearAndMonth]?.[yearAndMonthAndDay];
      }
    },
    editSpending: (state, {payload}: PayloadAction<EditEntryPayload>) => {
      const {transactionId, yearAndMonth, yearAndMonthAndDay, newAmount} =
        payload;

      state.entry[yearAndMonth][yearAndMonthAndDay][transactionId].amount =
        newAmount;
    },
  },
});

export const actions = {
  ...financeSlice.actions,
};
export const reducer = financeSlice.reducer;
