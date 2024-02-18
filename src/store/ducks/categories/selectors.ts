import {RootState} from 'src/store';

export const selectors = {
  selectAllSpending: (state: RootState) => state.categories.categoriesList,
};
