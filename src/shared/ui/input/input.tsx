import {
  Input as InputUI,
  InputProps,
  useStyleSheet,
} from '@ui-kitten/components';
import React from 'react';

import {themedStyles} from './input.styles';

export type UIInputProps = InputProps & {};

export const Input = React.forwardRef<InputUI, UIInputProps>(function Input(
  {style, disabled, ...rest}: UIInputProps,
  ref,
) {
  const styles = useStyleSheet(themedStyles);

  return (
    <InputUI
      ref={ref}
      style={[styles.root, style]}
      size="giant"
      allowFontScaling={false}
      scrollEnabled={false}
      disabled={disabled}
      {...rest}
    />
  );
});
