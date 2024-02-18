import {Text, useStyleSheet} from '@ui-kitten/components';
import React from 'react';
import {StyleProp, TextStyle, View} from 'react-native';
import Modal, {ModalProps} from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {themedStyles} from './bottom-modal.styles';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  titleStyles?: StyleProp<TextStyle>;
} & Partial<Omit<ModalProps, 'isVisible' | 'onBackButtonPress'>>;

export function BottomModal({
  children,
  style,
  onClose,
  title,
  titleStyles,
  ...outerModalProps
}: Props) {
  const insets = useSafeAreaInsets();

  const styles = useStyleSheet(themedStyles);

  return (
    <Modal
      style={[styles.modal, style]}
      onBackdropPress={onClose}
      swipeDirection={['down']}
      avoidKeyboard
      {...outerModalProps}>
      <View style={[styles.container, {paddingBottom: insets.bottom || 16}]}>
        <View style={styles.line} />

        {title && (
          <Text style={[styles.title, titleStyles]} category="h4">
            {title}
          </Text>
        )}

        {children}
      </View>
    </Modal>
  );
}
