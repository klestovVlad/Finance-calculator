import {StyleSheet} from 'react-native';

export const themedStyles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    marginTop: 'auto',
    paddingTop: 38,
    paddingRight: 22,
    paddingLeft: 22,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    backgroundColor: 'color-basic-100',
  },
  title: {
    marginBottom: 16,
  },
  line: {
    width: 72,
    borderRadius: 3,
    backgroundColor: 'color-grayscale-100',
    height: 4,
    position: 'absolute',
    top: 8,
    alignSelf: 'center',
  },
});
