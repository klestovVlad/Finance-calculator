import {StyleService} from '@ui-kitten/components';
import {SUMMARY_ROW_SIZES} from 'src/shared/constants/size';

export const themedStyles = StyleService.create({
  root: {
    marginBottom: 16,
    height: SUMMARY_ROW_SIZES.height,
  },
  addIncomeButton: {
    borderRadius: 20,
  },
  summaryRow: {
    width: '100%',
    flexDirection: 'row',
    gap: 11,
  },
});
