import React, {useState} from 'react';
import {View} from 'react-native';
import {BottomModal} from 'src/shared/ui/bottom-modal/bottom-modal';
import {Input} from 'src/shared/ui/input/input';
import {themedStyles} from './add-income-modal.styles';
import {useStyleSheet} from '@ui-kitten/components';
import {Button} from 'src/shared/ui/button/button';
import {actions, useAppDispatch} from 'src/store';

import {getCurrentDate} from 'src/shared/utils/getCurrentDate';
import {FinanceEntryType} from 'src/store/ducks/finance/types';
import {useAppToast} from 'src/shared/hooks/alert/useAppToast';

interface AddIncomeModalProps {
  isVisible: boolean;
  title: string;
  onClose: () => void;
}

export const AddIncomeModal = ({
  isVisible,
  title,
  onClose,
}: AddIncomeModalProps) => {
  const styles = useStyleSheet(themedStyles);
  const dispatch = useAppDispatch();
  const {showSuccessToast} = useAppToast();

  const addIncome = (amount?: number) => {
    if (!amount) {
      return;
    }
    const {yearAndMonth, yearAndMonthAndDay} = getCurrentDate();
    dispatch(
      actions.finance.addEntry({
        yearAndMonth,
        yearAndMonthAndDay,
        amount,
        entryType: FinanceEntryType.INCOME,
        category: {},
      }),
    );
    showSuccessToast(`Income added/You added ${amount} to your income.`);
    onClose();
  };

  const [amount, setAmount] = useState('');

  const isButtonDisabled =
    !amount || parseInt(amount.replace(/\s/g, ''), 10) === 0;

  const formatCurrency = (input: string) => {
    const numericInput = input.replace(/[^0-9]/g, '');
    const formattedInput = numericInput.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return formattedInput;
  };

  const handleAmountChange = (text: string) => {
    setAmount(formatCurrency(text));
  };

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
          text={`${title}`}
          size="large"
          disabled={isButtonDisabled}
          onPress={() => {
            addIncome(
              amount ? parseInt(amount.replace(/\s/g, ''), 10) : undefined,
            );
            setAmount('');
          }}
        />
      </View>
    </BottomModal>
  );
};
