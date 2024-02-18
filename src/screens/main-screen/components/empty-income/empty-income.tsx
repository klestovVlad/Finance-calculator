import React from 'react';
import {Text, useStyleSheet} from '@ui-kitten/components';
import {Image, TouchableOpacity, View} from 'react-native';
import {themedStyles} from './empty-income.styles';

interface EmptyIncomeProps {
  addExpenseModal: () => void;
}

export const EmptyIncome = ({addExpenseModal}: EmptyIncomeProps) => {
  const styles = useStyleSheet(themedStyles);
  const buttonBackgroundColor = require('src/shared/assets/images/big-circle.png');
  return (
    <View style={styles.root}>
      <Text style={styles.subText} category="s1" appearance="hint">
        Enter your first expenses
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={addExpenseModal}
        activeOpacity={0.9}>
        <Image source={buttonBackgroundColor} />
        <View style={styles.buttonTextWrapper}>
          <Text style={styles.buttonText} category="h3">
            Add expense
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
