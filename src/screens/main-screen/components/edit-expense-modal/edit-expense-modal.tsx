import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {BottomModal} from 'src/shared/ui/bottom-modal/bottom-modal';
import {Input} from 'src/shared/ui/input/input';
import {themedStyles} from './edit-expense-modal.styles';
import {useStyleSheet} from '@ui-kitten/components';
import {Button} from 'src/shared/ui/button/button';
import {actions, useAppDispatch} from 'src/store';

import {EntryType} from 'src/store/ducks/finance/types';
import {useAppToast} from 'src/shared/hooks/alert/useAppToast';
import {capitalizeFirstLetter} from 'src/shared/utils/capitalizeFirstLetter';
import {getNumberWithSpaces} from 'src/shared/utils/getNumberWithSpaces';

interface AddIncomeModalProps {
  isVisible: boolean;
  selectedExpenseData?: {
    yearAndMonth: string;
    transactionId: string;
    yearAndMonthAndDay: string;
    entry: EntryType;
  };
  onClose: () => void;
}

export const EditExpenseModal = ({
  isVisible,
  selectedExpenseData,
  onClose,
}: AddIncomeModalProps) => {
  const styles = useStyleSheet(themedStyles);
  const dispatch = useAppDispatch();
  const {showSuccessToast} = useAppToast();

  const editExpense = (newAmount?: number) => {
    if (!newAmount) {
      return;
    }

    const {yearAndMonth, transactionId, yearAndMonthAndDay, entry} =
      selectedExpenseData || {};
    if (!yearAndMonth || !transactionId || !yearAndMonthAndDay) {
      return;
    }
    dispatch(
      actions.finance.editSpending({
        yearAndMonth,
        newAmount,
        transactionId,
        yearAndMonthAndDay,
      }),
    );
    showSuccessToast(
      `Expense edited/${capitalizeFirstLetter(
        entry?.category.name,
      )} expense edited`,
    );
    onClose();
  };

  const [amount, setAmount] = useState('');

  useEffect(() => {
    setAmount(selectedExpenseData?.entry?.amount.toString() || '');
  }, [selectedExpenseData?.entry.amount]);

  const isButtonDisabled =
    !amount ||
    parseInt(amount.replace(/\s/g, ''), 10) === 0 ||
    amount === selectedExpenseData?.entry.amount.toString();

  const formatCurrency = (input: string) => {
    const numericInput = input.replace(/[^0-9]/g, '');
    const formattedInput = getNumberWithSpaces(numericInput);

    return formattedInput;
  };

  const handleAmountChange = (text: string) => {
    setAmount(formatCurrency(text));
  };

  const isIncome = selectedExpenseData?.entry.entryType === 'income';
  const categoryName = selectedExpenseData?.entry?.category.name;

  const title = `Edit ${selectedExpenseData?.entry.entryType}${
    isIncome ? '' : ` for ${categoryName}`
  }`;

  return (
    <BottomModal isVisible={isVisible} onClose={onClose} title={title}>
      <Input
        keyboardType="numeric"
        maxLength={10}
        onSubmitEditing={() => null}
        value={amount}
        autoFocus
        onChangeText={handleAmountChange}
      />
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.addButton}
          text={'Edit expense'}
          size="large"
          disabled={isButtonDisabled}
          onPress={() =>
            editExpense(
              amount ? parseInt(amount.replace(/\s/g, ''), 10) : undefined,
            )
          }
        />
      </View>
    </BottomModal>
  );
};
