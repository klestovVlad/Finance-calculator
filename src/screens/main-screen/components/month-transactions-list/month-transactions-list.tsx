import React from 'react';
import {Text, useStyleSheet} from '@ui-kitten/components';
import {themedStyles} from './month-transactions-list.styles';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {actions, selectors, useAppDispatch} from 'src/store';
import {getCurrentDate} from 'src/shared/utils/getCurrentDate';
import {capitalizeFirstLetter} from 'src/shared/utils/capitalizeFirstLetter';
import Swipe from '../swipe/swipe';
import {EntryType, FinanceEntryType} from 'src/store/ducks/finance/types';
import {useAppToast} from 'src/shared/hooks/alert/useAppToast';
import {getNumberWithSpaces} from 'src/shared/utils/getNumberWithSpaces';

interface MonthTransactionsProps {
  isLastElement?: boolean;
  yearAndMonthAndDay: string;
  onEditModalOpen: () => void;
  setSelectedExpense: (expense: EntryType, transactionId: string) => void;
}

export const MonthTransactionsList = ({
  yearAndMonthAndDay,
  isLastElement,
  onEditModalOpen,
  setSelectedExpense,
}: MonthTransactionsProps) => {
  const styles = useStyleSheet(themedStyles);
  const {showSuccessToast} = useAppToast();

  const dispatch = useAppDispatch();

  const {yearAndMonth} = getCurrentDate();
  const monthTransactions = useSelector(
    selectors.finance.selectSpendingByMonth(yearAndMonth),
  );

  const onEdit = (transactionId: string) => {
    const selectedExpense =
      monthTransactions[yearAndMonthAndDay][transactionId];
    setSelectedExpense(selectedExpense, transactionId);
    onEditModalOpen();
  };

  const onDelete = (transactionId: string) => {
    const selectedExpense =
      monthTransactions[yearAndMonthAndDay][transactionId];
    dispatch(
      actions.finance.deleteSpending({
        yearAndMonth,
        yearAndMonthAndDay,
        transactionId,
      }),
    );
    showSuccessToast(
      `Expense deleted/${capitalizeFirstLetter(
        selectedExpense?.category.name,
      )} expense deleted`,
    );
  };

  return (
    <View>
      {Object.keys(monthTransactions[yearAndMonthAndDay])
        .reverse()
        .map(transactionId => {
          return (
            <Swipe
              key={transactionId}
              onEdit={() => onEdit(transactionId)}
              onDelete={() => onDelete(transactionId)}>
              <View style={styles.transactionRow}>
                <View style={styles.transactionTitleWithIcon}>
                  <View style={styles.transactionIconWrapper}>
                    <Text>
                      {
                        monthTransactions[yearAndMonthAndDay][transactionId]
                          .category.emoji
                      }
                    </Text>
                  </View>
                  <Text category="c2">
                    {capitalizeFirstLetter(
                      monthTransactions[yearAndMonthAndDay][transactionId]
                        .category.name,
                    )}
                  </Text>
                </View>
                {monthTransactions[yearAndMonthAndDay][transactionId]
                  .entryType === FinanceEntryType.SPENDING ? (
                  <Text category="c2">
                    -
                    {getNumberWithSpaces(
                      monthTransactions[yearAndMonthAndDay][transactionId]
                        .amount,
                    )}
                  </Text>
                ) : (
                  <Text category="c2" style={styles.incomeAmount}>
                    +
                    {getNumberWithSpaces(
                      monthTransactions[yearAndMonthAndDay][transactionId]
                        .amount,
                    )}
                  </Text>
                )}
              </View>
            </Swipe>
          );
        })}
      {!isLastElement && <View style={styles.underline} />}
    </View>
  );
};
