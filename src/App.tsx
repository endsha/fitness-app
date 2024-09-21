import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MainBottomTabs from '@screens/MainBottomTabs';

import { NavigationScreenName } from '@customTypes/navigation';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationScreenName.MainBottomTabs}>
        <Stack.Screen
          name={NavigationScreenName.MainBottomTabs}
          component={MainBottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
