import React from 'react';
import {Text, useStyleSheet} from '@ui-kitten/components';
import {themedStyles} from './expense-category.styles';
import {TouchableOpacity, View} from 'react-native';
import {capitalizeFirstLetter} from 'src/shared/utils/capitalizeFirstLetter';
import {CategoryType} from 'src/store/ducks/categories/types';

interface ExpenseCategoryProps {
  isCategoryDisabled?: boolean;
  isSelected?: boolean;
  category: CategoryType;
  onCategorySelect?: (category: CategoryType) => void;
}

export const ExpenseCategory = ({
  category,
  isCategoryDisabled,
  isSelected,
  onCategorySelect,
}: ExpenseCategoryProps) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <TouchableOpacity
      style={[styles.root, isCategoryDisabled && styles.disabled]}
      activeOpacity={0.5}
      onPress={() => onCategorySelect?.(category)}>
      <View style={[styles.iconContainer, isSelected && styles.selected]}>
        <Text style={styles.emoji}>{category.emoji}</Text>
      </View>
      <Text category="s1" numberOfLines={1}>
        {capitalizeFirstLetter(category.name)}
      </Text>
    </TouchableOpacity>
  );
};
