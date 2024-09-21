import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '@screens/Home';

import { NavigationScreenName } from '@customTypes/navigation';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={NavigationScreenName.Home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
