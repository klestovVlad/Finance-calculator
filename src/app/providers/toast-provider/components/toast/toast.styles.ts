import {StyleService} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

export const containerStyles = StyleService.create({
  root: {
    height: 76,
    maxWidth: 392,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    marginBottom: 8,
    borderWidth: 1,
  },
  success: {
    borderColor: 'color-success-600',
    backgroundColor: 'color-success-200',
  },
  error: {
    borderColor: 'color-danger-600',
    backgroundColor: 'color-danger-200',
  },
  basic: {
    borderColor: 'color-basic-700',
    backgroundColor: 'color-basic-100',
  },
  fixed: {
    borderColor: 'color-info-600',
    backgroundColor: 'color-info-200',
  },
  warning: {
    borderColor: 'color-warning-600',
    backgroundColor: 'color-warning-200',
  },
});

export const iconContainerStyles = StyleSheet.create({
  root: {
    marginRight: 16,
    height: 20,
    width: 20,
  },
});

export const messageContainerStyles = StyleSheet.create({
  root: {flex: 1},
});
