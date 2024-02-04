import { Platform } from 'react-native';

export function useAppPlatform() {
  const isIos = Platform.OS === 'ios';
  const isAndroid = Platform.OS === 'android';

  return { isIos, isAndroid } as const;
}
