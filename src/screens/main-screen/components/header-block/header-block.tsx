import React from 'react';
import {Text, useStyleSheet} from '@ui-kitten/components';
import {View} from 'react-native';
import {themedStyles} from './header-block.styles';
import {getCurrentMonthName} from '../../utils/getCurrentMonthName';
import {WeekCalendar} from '../week-calendar/week-calendar';

export const HeaderBlock = () => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View>
      <Text style={styles.title} category="h1">
        {getCurrentMonthName(true)}
      </Text>
      <WeekCalendar />
    </View>
  );
};
