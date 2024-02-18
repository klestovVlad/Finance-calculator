import {combineReducers} from 'redux';

import * as financeSlice from './finance';
import * as categories from './categories';

export const rootReducer = combineReducers({
  finance: financeSlice.reducer,
  categories: categories.reducer,
});

export const actions = {
  finance: financeSlice.actions,
  categories: categories.actions,
};

export const selectors = {
  finance: financeSlice.selectors,
  categories: categories.selectors,
};
