import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 56,
  },
  leftButtonTouchableOpacity: {
    left: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    padding: 4,
  },
  leftButton: {
    width: 24,
    height: 24,
  },
  title: {
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  iconContainer: {
    minWidth: 24,
  },
  horizontalPadding: {
    paddingHorizontal: 24,
  },
});
