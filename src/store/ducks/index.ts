import {combineReducers} from 'redux';

import * as financeSlice from './finance';

export const rootReducer = combineReducers({
  finance: financeSlice.reducer,
});

export const actions = {
  finance: financeSlice.actions,
};

export const selectors = {
  finance: financeSlice.selectors,
};
