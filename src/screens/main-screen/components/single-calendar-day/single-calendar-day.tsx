import React from 'react';
import {Text, useStyleSheet} from '@ui-kitten/components';
import {View} from 'react-native';
import {themedStyles} from './single-calendar-day.styles';

interface SingleCalendarDayProps {
  date: Date;
}

export const SingleCalendarDay = ({date}: SingleCalendarDayProps) => {
  const styles = useStyleSheet(themedStyles);
  const dayInWeek = date.toLocaleDateString('en', {weekday: 'long'});
  const flirtsLetterOfDayInWeek = dayInWeek.charAt(0);
  const dayInMonth = date.getDate();

  const isCurrentDay = date.getDate() === new Date().getDate();
  return (
    <View style={[styles.root, isCurrentDay && styles.currentDay]}>
      <Text
        category="c1"
        appearance="hint"
        style={[styles.header, isCurrentDay && styles.currentDayHeader]}>
        {flirtsLetterOfDayInWeek}
      </Text>
      <Text category="s1" style={[isCurrentDay && styles.currentDayHeader]}>
        {dayInMonth}
      </Text>
    </View>
  );
};
