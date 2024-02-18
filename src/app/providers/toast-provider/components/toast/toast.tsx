import {Icon, Text, useStyleSheet} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {ToastProps} from 'react-native-toast-notifications/lib/typescript/toast';

import {
  containerStyles,
  iconContainerStyles,
  messageContainerStyles,
} from './toast.styles';

type Props = ToastProps & {
  message: string;
};

const renderIcon = (type: string) => {
  switch (type) {
    case 'success':
      return <Icon name="checkmark" />;
    case 'error':
      return <Icon name="flash-outline" />;
    case 'basic':
      return <Icon name="email-outline" />;
    case 'fixed':
      return <Icon name="question-mark-outline" />;
    case 'warning':
      return <Icon name="alert-triangle-outline" />;

    default:
      return <Icon name="checkmark" />;
  }
};

const getContainerTypeStyle = (
  type: string,
  styles: StyleSheet.NamedStyles<any>,
) => {
  switch (type) {
    case 'success':
      return styles.success;
    case 'error':
      return styles.error;
    case 'basic':
      return styles.basic;
    case 'fixed':
      return styles.fixed;
    case 'warning':
      return styles.warning;

    default:
      return styles.success;
  }
};

export function Toast({type = 'success', message}: Props) {
  const styles = useStyleSheet(containerStyles);
  const window = useWindowDimensions();
  const width = window.width - 32;

  const [title, content] = message.split('/');

  return (
    <View
      style={[
        containerStyles.root,
        getContainerTypeStyle(type, styles),
        {width},
      ]}>
      <View style={[iconContainerStyles.root]}>{renderIcon(type)}</View>
      <View style={[messageContainerStyles.root]}>
        <Text category="h6" numberOfLines={1}>
          {title}
        </Text>
        <Text category="p1" numberOfLines={2}>
          {content}
        </Text>
      </View>
    </View>
  );
}
