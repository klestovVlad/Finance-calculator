import {StyleService} from '@ui-kitten/components';

export const themedStyles = StyleService.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 14,
    borderRadius: 14,
  },
  currentDay: {
    backgroundColor: 'color-primary-500',
  },
  header: {
    marginBottom: 2,
  },
  currentDayHeader: {
    color: 'white',
  },
  currentDayNumber: {
    color: 'white',
  },
});
