import {StyleService} from '@ui-kitten/components';

export const themedStyles = StyleService.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 14,
    overflow: 'hidden',
  },
  headerRow: {
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  amount: {
    marginBottom: 16,
    marginLeft: 16,
  },
  progress: {
    height: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#141B1F',
  },
  progressTextWrapper: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  progressText: {
    position: 'absolute',
    overflow: 'hidden',
    bottom: 16,
    left: 16,
    color: 'white',
  },
});
