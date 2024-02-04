import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DEFAULT_SCREEN_OPTIONS} from '../config';
import {navigationRef} from '../navigation-service';
import {MainScreen} from 'src/screens/main-screen/ui/main-screen';
import {ScreenBaseProps} from 'src/shared/navigation/types';
import {AppRoutes} from 'src/shared/navigation/routes';

const Stack = createNativeStackNavigator<MainNavigatorParams>();

export function MainNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Group screenOptions={DEFAULT_SCREEN_OPTIONS}>
          <Stack.Screen name={AppRoutes.MainScreen} component={MainScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export type MainNavigatorParams = {
  [AppRoutes.MainScreen]: undefined;
};

export type OnboardingScreenProps = ScreenBaseProps<
  AppRoutes.MainScreen,
  MainNavigatorParams
>;
