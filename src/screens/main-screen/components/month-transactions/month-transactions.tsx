import React from 'react';
import {Text, useStyleSheet} from '@ui-kitten/components';
import {themedStyles} from './month-transactions.styles';
import {View} from 'react-native';
import {getCurrentMonthName} from '../../utils/getCurrentMonthName';
import {useSelector} from 'react-redux';
import {getCurrentDate} from 'src/shared/utils/getCurrentDate';
import {selectors} from 'src/store';
import {MonthSummaryRow} from '../month-summary-row/month-summary-row';
import {MonthTransactionsBlock} from '../month-transactions-block/month-transactions-block';
import {HeaderBlock} from '../header-block/header-block';

interface MonthTransactionsProps {
  addExpenseModal: () => void;
}

export const MonthTransactions = ({
  addExpenseModal,
}: MonthTransactionsProps) => {
  const styles = useStyleSheet(themedStyles);

  const {yearAndMonth} = getCurrentDate();
  const transactionsForCurrentMonth = useSelector(
    selectors.finance.selectSpendingAmountByMonth(yearAndMonth),
  );

  return (
    <View style={styles.root}>
      <MonthSummaryRow />
      <HeaderBlock />
      <View style={styles.monthTransactionsRow}>
        <Text category="s1">Transactions for {getCurrentMonthName(true)}</Text>
        <Text category="s1">{transactionsForCurrentMonth}</Text>
      </View>
      <MonthTransactionsBlock addExpenseModal={addExpenseModal} />
    </View>
  );
};
