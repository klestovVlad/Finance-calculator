import {StyleService} from '@ui-kitten/components';

export const themedStyles = StyleService.create({
  rightAction: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'color-background',
    height: '100%',
  },
  actionButton: {
    width: 70,
    paddingHorizontal: 10,
    fontWeight: '600',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: 4,
  },
  editAction: {
    backgroundColor: 'color-warning-500',
  },
  deleteAction: {
    backgroundColor: 'color-danger-500',
  },
  iconWrapper: {
    width: 20,
    height: 20,
  },
  actionText: {},
});
