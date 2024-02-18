import React from 'react';
import {useStyleSheet} from '@ui-kitten/components';
import {View} from 'react-native';
import {themedStyles} from './week-calendar.styles';
import {SingleCalendarDay} from '../single-calendar-day/single-calendar-day';
import {getDatesOfWeek} from '../../utils/getDatesOfWeek';

export const WeekCalendar = () => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.root}>
      {getDatesOfWeek().map((date, index) => (
        <SingleCalendarDay key={index} date={date} />
      ))}
    </View>
  );
};
