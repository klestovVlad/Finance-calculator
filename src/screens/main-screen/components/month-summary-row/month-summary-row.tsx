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
import {getCurrentMonthName} from '../../utils/getCurrentMonthName';

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

  const {yearAndMonth} = getCurrentDate();

  const currentMonthIncome = useSelector(
    selectors.finance.selectIncomeByMonth(yearAndMonth),
  );

  const currentMonthExpenses = useSelector(
    selectors.finance.selectSpendingAmountByMonth(yearAndMonth),
  );

  const allSaving = useSelector(selectors.finance.selectAllSavings);

  const progress = (currentMonthExpenses / currentMonthIncome) * 100;

  const hasIncome = currentMonthIncome > 0;

  return (
    <View style={styles.root}>
      {hasIncome ? (
        <View style={styles.summaryRow}>
          <SpendingProgress
            header={`Total for ${getCurrentMonthName(true)}`}
            amount={currentMonthExpenses}
            progress={progress}
          />
          <SpendingProgress
            header="Income"
            amount={allSaving}
            onPress={onOpenModal}
          />
        </View>
      ) : (
        <Button
          style={styles.addIncomeButton}
          text="Add income to control your expenses"
          size="giant"
          status="warning"
          onPress={onOpenModal}
        />
      )}
      <AddIncomeModal
        title={'Add income'}
        isVisible={isModalVisible}
        onClose={onCloseModal}
      />
    </View>
  );
};
