import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CategoriesStateType, CategoryType} from './types';
import {initialCategories} from 'src/shared/constants/categories';

const initialState: CategoriesStateType = {
  categoriesList: initialCategories,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, {payload}: PayloadAction<CategoryType>) => {
      state.categoriesList = [...state.categoriesList, payload];
    },
  },
});

export const actions = {
  ...categoriesSlice.actions,
};
export const reducer = categoriesSlice.reducer;
