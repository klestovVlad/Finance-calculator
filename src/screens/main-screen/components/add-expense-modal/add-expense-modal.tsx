import React, {useState} from 'react';
import {View} from 'react-native';
import {BottomModal} from 'src/shared/ui/bottom-modal/bottom-modal';
import {ExpenseCategory} from 'src/shared/ui/expense-category/expense-category';
import {Input} from 'src/shared/ui/input/input';
import {themedStyles} from './add-expense-modal.styles';
import {useStyleSheet} from '@ui-kitten/components';
import {splitArrayIntoChunks} from '../../utils/splitArrayIntoChunks';
import {Button} from 'src/shared/ui/button/button';
import {actions, selectors, useAppDispatch} from 'src/store';

import {getCurrentDate} from 'src/shared/utils/getCurrentDate';
import {useAppToast} from 'src/shared/hooks/alert/useAppToast';
import {capitalizeFirstLetter} from 'src/shared/utils/capitalizeFirstLetter';
import {useSelector} from 'react-redux';
import {CategoryType} from 'src/store/ducks/categories/types';
import {FinanceEntryType} from 'src/store/ducks/finance/types';

interface AddExpenseModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const AddExpenseModal = ({isVisible, onClose}: AddExpenseModalProps) => {
  const styles = useStyleSheet(themedStyles);
  const dispatch = useAppDispatch();
  const categories = useSelector(selectors.categories.selectAllSpending);
  const {showSuccessToast} = useAppToast();

  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>();

  const addSpending = (category?: CategoryType, amount?: number) => {
    if (!category || !amount) {
      return;
    }
    const {yearAndMonth, yearAndMonthAndDay} = getCurrentDate();
    dispatch(
      actions.finance.addEntry({
        yearAndMonth,
        yearAndMonthAndDay,
        category,
        amount,
        entryType: FinanceEntryType.SPENDING,
      }),
    );
    showSuccessToast(
      `Expense added/${category.emoji} ${capitalizeFirstLetter(
        category.name,
      )} expenses added`,
    );
    setAmount('');
    setSelectedCategory(undefined);
    onClose();
  };

  const categoriesByRow = splitArrayIntoChunks(categories, 4);

  const isButtonDisabled =
    !amount ||
    parseInt(amount.replace(/\s/g, ''), 10) === 0 ||
    !selectedCategory;

  const formatCurrency = (input: string) => {
    const numericInput = input.replace(/[^0-9]/g, '');
    const formattedInput = numericInput.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return formattedInput;
  };

  const handleAmountChange = (text: string) => {
    setAmount(formatCurrency(text));
  };

  return (
    <BottomModal isVisible={isVisible} onClose={onClose} title="Add expense">
      <Input
        keyboardType="numeric"
        maxLength={10}
        onSubmitEditing={() => null}
        value={amount}
        autoFocus
        onChangeText={handleAmountChange}
      />
      <View style={styles.categoryContainer}>
        {categoriesByRow.map((item, RowIndex) => (
          <View key={RowIndex} style={styles.categoryContainerRow}>
            {item.map((category, index) => (
              <ExpenseCategory
                key={index}
                category={category}
                isSelected={selectedCategory?.name === category.name}
                onCategorySelect={setSelectedCategory}
              />
            ))}
            {RowIndex + 1 === categoriesByRow.length && (
              <ExpenseCategory
                category={{
                  name: 'Add',
                  emoji: '✍️',
                }}
                isCategoryDisabled
              />
            )}
          </View>
        ))}
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.addButton}
          text="Add expense"
          size="large"
          disabled={isButtonDisabled}
          onPress={() =>
            addSpending(selectedCategory, Number(amount.replace(/\s/g, '')))
          }
        />
      </View>
    </BottomModal>
  );
};
