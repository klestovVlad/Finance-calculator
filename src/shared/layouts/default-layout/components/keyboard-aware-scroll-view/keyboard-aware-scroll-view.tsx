import React from 'react';
import {Platform} from 'react-native';
import {
  KeyboardAwareScrollView as KeyboardAwareScrollViewUI,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';
import {useAppPlatform} from 'src/shared/hooks/platform/useAppPlatform';
import {useKeyboardAwareScrollView} from 'src/shared/hooks/view/useKeyboardAwareScrollView';
import {styles} from 'src/shared/layouts/default-layout/components/keyboard-aware-scroll-view/keyboard-aware-scroll-view.styles';

type KeyboardAwareProps = KeyboardAwareScrollViewProps & {
  fullHeight?: boolean;
};

export const KeyboardAwareScrollView = React.forwardRef<
  KeyboardAwareScrollViewUI,
  KeyboardAwareProps
>(function KeyboardAwareScrollView(
  {children, fullHeight = true, ...otherProps}: KeyboardAwareProps,
  ref,
) {
  const {height} = useKeyboardAwareScrollView();

  const {isIos} = useAppPlatform();

  const fullHeightStyle = isIos ? {minHeight: height} : styles.androidStyles;

  return (
    <KeyboardAwareScrollViewUI
      ref={ref}
      contentContainerStyle={fullHeight && fullHeightStyle}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode={Platform.OS === 'ios' ? 'interactive' : 'none'}
      nestedScrollEnabled
      keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
      {...otherProps}>
      {children}
    </KeyboardAwareScrollViewUI>
  );
});
