import React, {FC} from 'react';
import {Animated, ScrollView} from 'react-native';
import {useKeyboardAware} from 'src/shared/hooks/view/useKeyboardAware';

import {styles} from './keyboard-aware.styles';

type Props = {
  children: React.ReactNode;
};

export const KeyboardAware: FC<Props> = ({children}) => {
  const {formPosition} = useKeyboardAware();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.root}>
      <Animated.View
        style={[
          styles.inner,
          {
            transform: [
              {
                translateY: formPosition,
              },
            ],
          },
        ]}>
        {children}
      </Animated.View>
    </ScrollView>
  );
};
