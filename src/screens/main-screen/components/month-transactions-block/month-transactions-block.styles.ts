import {StyleService} from '@ui-kitten/components';

export const themedStyles = StyleService.create({
  root: {
    marginTop: 24,
    backgroundColor: 'white',
    borderRadius: 20,
    flexGrow: 1,
  },
  listHeader: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  listWrapper: {borderRadius: 20},
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
    marginTop: 8,
  },
  transactionTitleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
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
  },
});
