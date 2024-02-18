import {StyleSheet} from 'react-native';

export const themedStyles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9,
    maxWidth: 70,
  },
  disabled: {
    opacity: 0.4,
  },
  selected: {
    borderWidth: 4,
    borderColor: 'color-primary-500',
  },
  iconContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F1F9',
    borderRadius: 22,
    maxWidth: 70,
    maxHeight: 70,
    aspectRatio: 1,
  },
  emoji: {
    fontSize: 36,
    lineHeight: 50,
    textAlign: 'center',
  },
});
