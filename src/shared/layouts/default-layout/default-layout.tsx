import {useStyleSheet} from '@ui-kitten/components';
import React, {FC} from 'react';
import {ColorValue, StatusBar, StyleProp, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DefaultScreenHeader} from 'src/shared/layouts/default-layout/components/default-screen-header/default-screen-header';
import {KeyboardAware} from 'src/shared/layouts/default-layout/components/keyboard-aware/keyboard-aware';
import {KeyboardAwareScrollView} from 'src/shared/layouts/default-layout/components/keyboard-aware-scroll-view/keyboard-aware-scroll-view';
import {NestedHeader} from 'src/shared/layouts/default-layout/components/nested-header/nested-header';
import themedStyles from 'src/shared/layouts/default-layout/default-layout.styles';

type Props = {
  children: React.ReactNode;
  withHorizontalPadding?: boolean;
  customStyles?: StyleProp<ViewStyle>;
  statusBarbackgroundColor?: ColorValue | undefined;
  paddingTop?: boolean;
  paddingBottom?: boolean;
};

export const DefaultLayout: FC<Props> & {
  NestedHeader: typeof NestedHeader;
  DefaultScreenHeader: typeof DefaultScreenHeader;
  KeyboardAware: typeof KeyboardAware;
  KeyboardAwareScrollView: typeof KeyboardAwareScrollView;
} = ({
  children,
  withHorizontalPadding = true,
  customStyles,
  statusBarbackgroundColor = 'transparent',
  paddingTop = true,
  paddingBottom = true,
}) => {
  const insets = useSafeAreaInsets();
  const styles = useStyleSheet(themedStyles);

  return (
    <>
      <View>
        <StatusBar
          barStyle={'dark-content'}
          translucent={true}
          backgroundColor={statusBarbackgroundColor}
        />
      </View>
      <View
        style={[
          styles.root,
          {
            paddingTop: paddingTop ? (insets.top || 0) + 32 : undefined,
            paddingBottom: paddingBottom ? insets.bottom || 20 : undefined,
          },
          withHorizontalPadding && styles.withHorizontalPadding,
          customStyles,
        ]}>
        {children}
      </View>
    </>
  );
};

DefaultLayout.NestedHeader = NestedHeader;
DefaultLayout.DefaultScreenHeader = DefaultScreenHeader;
DefaultLayout.KeyboardAware = KeyboardAware;
DefaultLayout.KeyboardAwareScrollView = KeyboardAwareScrollView;
