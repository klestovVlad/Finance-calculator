import React from 'react';
import {Text, useStyleSheet} from '@ui-kitten/components';
import {themedStyles} from './spending-progressstyles';
import {TouchableOpacity, View} from 'react-native';
import SvgEditTextIcon from 'src/shared/assets/icons/components/EditTextIcon';

interface SpendingProgressProps {
  header: string;
  amount: number;
  progress?: number;
  onPress?: () => void;
}

export const SpendingProgress = ({
  header,
  amount,
  progress = 0,
  onPress,
}: SpendingProgressProps) => {
  const styles = useStyleSheet(themedStyles);
  const isActionOnPress = !!onPress;

  return (
    <TouchableOpacity
      style={styles.root}
      onPress={onPress}
      activeOpacity={isActionOnPress ? 0.5 : 1}>
      <View
        style={[
          styles.progress,
          {
            width: `${progress}%`,
          },
        ]}
      />
      <View style={styles.headerRow}>
        <Text appearance="hint" category="s1">
          {header}
        </Text>
        {isActionOnPress && <SvgEditTextIcon />}
      </View>
      <Text style={styles.amount} category="h6">
        {amount}
      </Text>

      <View style={[styles.progressTextWrapper, {width: `${progress}%`}]}>
        <Text
          style={styles.progressText}
          numberOfLines={1}
          ellipsizeMode="clip"
          category="h6">
          {amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
