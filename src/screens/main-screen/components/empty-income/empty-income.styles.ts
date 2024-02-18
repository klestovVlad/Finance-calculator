import {StyleService} from '@ui-kitten/components';

export const themedStyles = StyleService.create({
  root: {
    marginTop: 64,
  },
  button: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  buttonTextWrapper: {
    position: 'absolute',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 26,
    flexGrow: 1,
    maxWidth: 150,
    flexWrap: 'wrap',
  },
  subText: {
    marginBottom: 32,
    textAlign: 'center',
  },
});
