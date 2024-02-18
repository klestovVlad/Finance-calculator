import {StyleService} from '@ui-kitten/components';

export const themedStyles = StyleService.create({
  root: {
    marginTop: 24,
    backgroundColor: 'white',
    paddingTop: 10,
    borderRadius: 20,
  },
  listHeader: {
    paddingHorizontal: 16,
  },
  transactionIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'color-background',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8F0F2',
  },
  transactionTitleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  allTransactionButtonText: {
    marginTop: 16,
    color: 'color-primary-500',
  },
  addExpenseButtonWrapper: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    bottom: -35,
    left: 16,
  },
  addExpenseButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'color-primary-500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listFooter: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  incomeAmount: {
    color: 'color-success-700',
  },
});
