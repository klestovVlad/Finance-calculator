import React, {PropsWithChildren} from 'react';
import {ToastProvider as LibToastProvider} from 'react-native-toast-notifications';
import {Toast} from 'src/app/providers/toast-provider/components/toast/toast';
import {useAppPlatform} from 'src/shared/hooks/platform/useAppPlatform';

const IOS_TOP_OFFSET = 50;
const ANDROID_TOP_OFFSET = 35;

type Props = PropsWithChildren;

export function ToastProvider({children}: Props) {
  const {isIos} = useAppPlatform();

  return (
    <LibToastProvider
      placement="top"
      animationType="slide-in"
      renderToast={Toast}
      offset={isIos ? IOS_TOP_OFFSET : ANDROID_TOP_OFFSET}>
      {children}
    </LibToastProvider>
  );
}
