import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import React, {PropsWithChildren} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {styles} from './ui-provider.styles';
import {theme} from 'src/shared/theme/theme';
import {default as mapping} from 'src/shared/theme/mapping.json';

type Props = PropsWithChildren;

export function UIProvider({children}: Props) {
  return (
    <GestureHandlerRootView style={styles.root}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme} customMapping={mapping}>
        {children}
      </ApplicationProvider>
    </GestureHandlerRootView>
  );
}
