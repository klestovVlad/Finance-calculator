import {Icon, Text, useTheme} from '@ui-kitten/components';
import React, {ReactNode} from 'react';
import {
  StyleProp,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {useAutoHitSlop} from 'src/shared/hooks/view/useAutoHitSlop';

import {styles} from './nested-header.styles';

type Props = {
  title?: string | null;
  customLeft?: ReactNode;
  customRight?: ReactNode;
  customTitle?: ReactNode;
  customStyles?: StyleProp<ViewStyle>;
  onBackButtonPress?: () => void;
  lightAccent?: boolean;
  buttonBackground?: boolean;
  withHorizontalPadding?: boolean;
} & ViewProps;

export function NestedHeader({
  title,
  customLeft,
  customRight,
  customTitle,
  customStyles,
  onBackButtonPress,
  lightAccent,
  buttonBackground,
  withHorizontalPadding,
  ...props
}: Props) {
  const {insets, onLayout} = useAutoHitSlop();
  const theme = useTheme();

  const accentColor = lightAccent
    ? theme['color-basic-100']
    : theme['color-black'];
  const backgroundColor = buttonBackground
    ? lightAccent
      ? theme['color-basic-700']
      : theme['color-basic-100']
    : undefined;
  return (
    <View
      {...props}
      style={[
        styles.root,
        props.style,
        withHorizontalPadding && styles.horizontalPadding,
        customStyles,
      ]}>
      {onBackButtonPress && !customLeft && (
        // TODO: change on IconButton component
        <TouchableOpacity
          onPress={onBackButtonPress}
          style={[styles.leftButtonTouchableOpacity, {backgroundColor}]}
          hitSlop={insets}
          onLayout={onLayout}>
          <View style={styles.leftButton}>
            <Icon name="arrow-back-outline" fill={accentColor} />
          </View>
        </TouchableOpacity>
      )}

      {customLeft && <View style={styles.iconContainer}>{customLeft}</View>}

      {customTitle
        ? customTitle
        : title && (
            <Text category="s2" style={[styles.title, {color: accentColor}]}>
              {title}
            </Text>
          )}

      <View style={styles.iconContainer}>{customRight && customRight}</View>
    </View>
  );
}
