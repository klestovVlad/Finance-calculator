import React from 'react';
import {Text, useStyleSheet} from '@ui-kitten/components';

import {themedStyles} from './main-screen.styles';
import {DefaultLayout} from 'src/shared/layouts/default-layout/default-layout';

export const MainScreen = () => {
  const styles = useStyleSheet(themedStyles);
  return (
    <DefaultLayout>
      <Text style={styles.title} category="h1">
        November
      </Text>
    </DefaultLayout>
  );
};
