import React from 'react';
import {Button as UiButton, useStyleSheet} from '@ui-kitten/components';
import {themedStyles} from './button.styles';
import {EvaSize} from '@ui-kitten/components/devsupport';
import {StyleProp, ViewStyle} from 'react-native';

interface ButtonProps extends React.ComponentProps<typeof UiButton> {
  text?: string;
  size?: EvaSize;
  style?: StyleProp<ViewStyle>;
}

export const Button = ({text, size = 'large', style, ...rest}: ButtonProps) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <UiButton size={size} style={[styles.root, style]} {...rest}>
      {text}
    </UiButton>
  );
};
