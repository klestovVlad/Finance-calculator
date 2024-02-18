import React, {useState} from 'react';
import {Text, useStyleSheet} from '@ui-kitten/components';
import {themedStyles} from './month-transactions-block.styles';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectors} from 'src/store';
import {getCurrentDate} from 'src/shared/utils/getCurrentDate';
import {formatDateDayMonthFormat} from '../../utils/formatDateDayMonthFormat';
import {capitalizeFirstLetter} from 'src/shared/utils/capitalizeFirstLetter';
import SvgBigPlusIcon from 'src/shared/assets/icons/components/BigPlusIcon';
import {MonthTransactionsList} from '../month-transactions-list/month-transactions-list';
import {EditExpenseModal} from '../edit-expense-modal/edit-expense-modal';
import {EntryType} from 'src/store/ducks/finance/types';
import {useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  CALENDAR_HEIGHT,
  DEFAULT_LAYOUT_PADDINGS,
  HEADER_HEIGHT,
} from 'src/shared/constants/size';

interface MonthTransactionsProps {
  addExpenseModal: () => void;
}

export const MonthTransactionsBlock = ({
  addExpenseModal,
}: MonthTransactionsProps) => {
  const {height} = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const scrollBlockHeight =
    height -
    insets.top -
    DEFAULT_LAYOUT_PADDINGS.paddingTop -
    16 -
    HEADER_HEIGHT -
    16 -
    CALENDAR_HEIGHT -
    24 -
    24 -
    16 -
    insets.bottom -
    DEFAULT_LAYOUT_PADDINGS.paddingBottom -
    100;

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState<{
    yearAndMonth: string;
    transactionId: string;
    yearAndMonthAndDay: string;
    entry: EntryType;
  }>();

  const onEditModalOpen = () => {
    setIsEditModalVisible(true);
  };

  const onEditModalClose = () => {
    setIsEditModalVisible(false);
  };

  const styles = useStyleSheet(themedStyles);

  const {yearAndMonth} = getCurrentDate();
  const monthTransactions = useSelector(
    selectors.finance.selectSpendingByMonth(yearAndMonth),
  );

  const formatDate = (date: string) => {
    return capitalizeFirstLetter(formatDateDayMonthFormat(date));
  };

  return (
    <View style={{...styles.root, maxHeight: scrollBlockHeight}}>
      <ScrollView style={styles.listWrapper}>
        {Object.keys(monthTransactions)
          .reverse()
          .map((yearAndMonthAndDay, index) => {
            return (
              <View key={index}>
                <View style={styles.listHeader}>
                  <Text category="s2" appearance="hint">
                    {formatDate(yearAndMonthAndDay)}
                  </Text>
                </View>
                <MonthTransactionsList
                  yearAndMonthAndDay={yearAndMonthAndDay}
                  setSelectedExpense={(
                    entry: EntryType,
                    transactionId: string,
                  ) =>
                    setSelectedExpense({
                      yearAndMonth,
                      transactionId,
                      yearAndMonthAndDay,
                      entry,
                    })
                  }
                  onEditModalOpen={onEditModalOpen}
                  isLastElement={
                    Object.keys(monthTransactions).length === index + 1
                  }
                />
              </View>
            );
          })}
      </ScrollView>
      <View style={styles.listFooter}>
        {/* <TouchableOpacity onPress={() => null}>
          <Text style={styles.allTransactionButtonText} category="s1">
            See all transactions
          </Text>
        </TouchableOpacity> */}
        <View style={styles.addExpenseButtonWrapper}>
          <TouchableOpacity
            style={styles.addExpenseButton}
            onPress={addExpenseModal}>
            <SvgBigPlusIcon />
          </TouchableOpacity>
        </View>
      </View>
      <EditExpenseModal
        isVisible={isEditModalVisible}
        selectedExpenseData={selectedExpense}
        onClose={onEditModalClose}
      />
    </View>
  );
};
