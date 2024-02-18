import React, {useState} from 'react';
import {useStyleSheet} from '@ui-kitten/components';
import {themedStyles} from './month-summary-row.styles';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {getCurrentDate} from 'src/shared/utils/getCurrentDate';
import {selectors} from 'src/store';
import {Button} from 'src/shared/ui/button/button';
import {AddIncomeModal} from '../add-income-modal/add-income-modal';
import {SpendingProgress} from '../spending-progress/spending-progress';

interface MonthTransactionsProps {}

export const MonthSummaryRow = ({}: MonthTransactionsProps) => {
  const styles = useStyleSheet(themedStyles);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onOpenModal = () => {
    setIsModalVisible(true);
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
  };
  const currentMonthIncome = useSelector(selectors.finance.selectLastIncome);

  const {yearAndMonth} = getCurrentDate();

  const currentMonthExpenses = useSelector(
    selectors.finance.selectSpendingAmountByMonth(yearAndMonth),
  );

  const progress = (currentMonthExpenses / currentMonthIncome) * 100;

  const hasIncome = currentMonthIncome > 0;

  return (
    <View style={styles.root}>
      {hasIncome ? (
        <View style={styles.summaryRow}>
          <SpendingProgress
            header="Total expenses"
            amount={currentMonthExpenses}
            progress={progress}
          />
          <SpendingProgress
            header="Income"
            amount={currentMonthIncome}
            progress={0}
            onPress={onOpenModal}
          />
        </View>
      ) : (
        <Button
          style={styles.addIncomeButton}
          text="Add income to control your expenses"
          size="giant"
          status="success"
          onPress={onOpenModal}
        />
      )}
      <AddIncomeModal
        title={hasIncome ? 'Edit income' : 'Add income'}
        isVisible={isModalVisible}
        onClose={onCloseModal}
      />
    </View>
  );
};
